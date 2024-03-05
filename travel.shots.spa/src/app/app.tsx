import { Component, ReactNode } from "react";
import { MainRoute, UserProvider } from "../modules";

/**
 * Top-level app component.
 */
class App extends Component {
    render(): ReactNode {
        return (
            <UserProvider>
                <MainRoute />
            </UserProvider>
        );
    }
}

export default App;