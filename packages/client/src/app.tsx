import type { Component } from "solid-js";
import { createTRPCQuery } from "./api";

const App: Component = () => {
  const [example] = createTRPCQuery("example.hello");

  return <div>{example()?.greeting}</div>;
};

export default App;
