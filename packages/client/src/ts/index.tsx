/* @refresh reload */
import { render } from "solid-js/web";

// styles
import "../styles/index.scss";

// components
import { App } from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);
