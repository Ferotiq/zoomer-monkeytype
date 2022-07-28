import type { Component } from "solid-js";
import { createTRPCQuery } from "./api";

export const App: Component = () => {
  const [example] = createTRPCQuery("example.hello", { text: "world" });

  return <div>{example()?.greeting}</div>;
};
