import { Component } from "react";
import { MainRoute, UserProvider } from "../modules";

/**
 * Top-level app component.
 */
class App extends Component {
    render() {
        return (
            <UserProvider>
                <MainRoute />
            </UserProvider>
        );
    }
}

export default App;