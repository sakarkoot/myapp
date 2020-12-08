import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from './Nav.js';
import DisplayVehicle from './DisplayVehicle.js';

class Vehicles extends Component {

    render() {
        return(
            <>
                <section className="header">
                    <h1>Star Wars API Demo-React  Sakar Koot</h1>
                </section>
                <hr></hr>
                <section className="main">
                    <Router>
                        <ul>
                            <li><Link to="/">Home</Link></li>    
                        </ul>
                        <hr></hr>
                            <Nav/>
                        <Switch>
                        <Route path="/vehicle/:vehicleId" component={ DisplayVehicle } />
                        </Switch>
                    </Router>
                </section>
            </>
        )
    }
}

export default Vehicles;
