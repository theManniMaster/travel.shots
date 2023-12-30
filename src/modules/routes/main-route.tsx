import { Component } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { Register } from "../register";

/**
 * Default URL route for all paths.
 */
class MainRoute extends Component{
    render() {
        return (
            <Routes>
                { /**
                 * if user.isLoggedIn:
                 *     path = "/", redirect to "/home"
                 *     path = "/home",
                 *     path = "/home/insights",
                 *     path = "/home/images",
                 *     path = "/home/token",
                 *     path = "/home/about",
                 * 
                 * not logged in: in any case redirect to /login (even if the url doesn't exist. once authenticated, we can redirect to /home)
                 * 
                 */}
                <Route path="/login" element={<h1>admin</h1>} />
                <Route path="/register" Component={Register} />
                <Route path="/home">
                    <Route index element={<h1>Home</h1>} />
                    <Route path="images" element={<h1>Images</h1>} />
                    <Route path="insights" element={<h1>Insights</h1>} />
                    <Route path="token" element={<h1>Token</h1>} />
                    <Route path="about" element={<h1>About</h1>} />
                </Route>
                <Route path="*" element={<h1>NotFound</h1>} />
            </Routes>
        );
    }
}

export default MainRoute;