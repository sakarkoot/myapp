import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Nav extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            vehicles: []
        }
    }
    componentDidMount() {
        fetch('https://swapi.dev/api/vehicles/')
        .then(response => response.json())
        .then(json => this.setState({vehicles : json.results}))
        
    }

    render(){
        return(
            <>
            <ul>
                {
                    this.state.vehicles.map((vehicle, index) => {
                    const id = vehicle.url.split("/")[5]
                    return(
                        <li key={index}>
                            <Link to={`/vehicle/${id}`}>
                            { vehicle.name }
                            </Link>
                        </li>
                    )
                    })
                }
            </ul>
            </>
        )
    }
}

export default Nav;
