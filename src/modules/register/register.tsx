import { Component, ReactNode } from "react";
import { InputLabel } from "../ui";

/**
 * User sign-up component.
 */
class Register extends Component {
    render(): ReactNode {
        return (
            <InputLabel label={"Your first name"} />
        );
    }
}

export default Register;