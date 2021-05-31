import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"
import Search from "./pages/Search";
import Save from "./pages/Save";
import '@fontsource/roboto';


function App() {
    return (
        <Router>
            <Navbar />
            <Header />
            <Switch>
                <Route exact path = {["/","/search"]}>
                    <Search />
                </Route>
                <Route exact path = {"/saved"}>
                    <Save />
                </Route>
            </Switch>
        </Router>
    )
}

export default App


