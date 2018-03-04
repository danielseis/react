import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./helloWorld/helloWorld";

ReactDOM.render(
    <Hello compiler="Typescript" framework="React" />,document.getElementById("app")
);