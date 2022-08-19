/* @refresh reload */
import { render } from "solid-js/web";

// styles
import "./styles/index.scss";

// components
import { App } from "./app";

if (window.location.hostname === "127.0.0.1") {
  window.location.replace("http://localhost:3000/");
} else {
  render(() => <App />, document.getElementById("root") as HTMLElement);
}
