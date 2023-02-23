import { PrismaClient, User } from "@prisma/client";
import { redirect } from "solid-start/server";
import { createCookieSessionStorage } from "solid-start/session";
import { Session } from "solid-start/session/sessions";
import { db } from ".";
type LoginForm = {
  username: string;
  password: string;
};

export function register({
  username,
  password,
}: LoginForm): Promise<User | null> {
  return db.user.create({
    data: { username: username, password },
  });
}

export async function login({
  username,
  password,
}: LoginForm): Promise<User | null> {
  const user = await db.user.findUnique({ where: { username } });
  if (!user) {
    return null;
  }
  const isCorrectPassword = password === user.password;
  if (!isCorrectPassword) return null;
  return user;
}

// const sessionSecret = import.meta.env.SESSION_SECRET;

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    // secure doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: true,
    secrets: ["hello"],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export function getUserSession(request: Request): Promise<Session> {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request): Promise<string | null> {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    return null;
  }
  return userId;
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
): Promise<string> {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function getUser(
  db: PrismaClient,
  request: Request
): Promise<User | null> {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const user = await db.user.findUnique({ where: { id: userId } });
    return user;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request): Promise<Response> {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

export async function createUserSession(
  userId: string,
  redirectTo: string
): Promise<Response> {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}
