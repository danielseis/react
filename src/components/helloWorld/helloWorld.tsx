import * as React from "react";

import { IhelloWorldProps } from "./IhelloWorldProps";
import { IhelloWorldState } from "./IhelloWorldState";

export class Hello extends React.Component<IhelloWorldProps, IhelloWorldState> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}