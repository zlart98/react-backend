import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListClientComponent from './component/ListClientComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from "./component/FooterComponent";
import CreateClientComponent from './component/CreateClientComponent';
import ViewClientComponent from './component/ViewClientComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {ListClientComponent}></Route>
                        <Route path = "/clients" component = {ListClientComponent}></Route>
                        <Route path = "/add-client/:id" component = {CreateClientComponent}></Route>
                        <Route path = "/view-client/:id" component = {ViewClientComponent}></Route>
                        {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>

    );
}

export default App;
