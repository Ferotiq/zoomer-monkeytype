import { Component, createResource } from "solid-js";
import { client } from "./api";

const App: Component = () => {
  const [example] = createResource(() => client.hello.query({ text: "World" }));

  return <div>{example()?.greeting}</div>;
};

export default App;
