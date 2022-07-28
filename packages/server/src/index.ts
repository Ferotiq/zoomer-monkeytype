export type { AppRouter } from "./api/router";
import { start } from "./api";
import { config } from "dotenv";

config();

start();
