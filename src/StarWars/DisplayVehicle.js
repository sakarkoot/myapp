import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from './Nav.js';

class DisplayVehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicle: {}
        }
    }
    componentDidMount() {
        const id = this.props.match.params.vehicleId
        const saved = localStorage.getItem(`vehicle-${id}`)
        if(saved) {
            this.setState({vehicle : JSON.parse(saved)})
            return
        }
        fetch(`https://swapi.dev/api/vehicles/${id}`)
        .then(response => response.json())
        .then(
            json => {
            this.setState({vehicle : json})
            localStorage.setItem(`vehicle-${id}`, JSON.stringify(json))
            }) 
    }

    componentDidUpdate(prevProps) {
        const prev = JSON.stringify(prevProps.match.params.vehicleId)
        const curr = JSON.stringify(this.props.match.params.vehicleId)

    if (prev !== curr) {
        const id = this.props.match.params.vehicleId
        const saved = localStorage.getItem(`vehicle-${id}`)
        if(saved) {
            this.setState({vehicle : JSON.parse(saved)})
            return
        }
        fetch(`https://swapi.dev/api/vehicles/${id}`)
        .then(response => response.json())
        .then(json => {
            this.setState({vehicle : json})
            localStorage.setItem(`vehicle-${id}`, JSON.stringify(json))
        })
    }
    }

    render() {
        const {
            vehicle
        } = this.state
        return(
            <>
                <h3>Name: {vehicle.name}</h3>
                <p>Model: {vehicle.model}</p>
                <p>Manufacturer: {vehicle.manufacturer}</p>
                <p>URL: {vehicle.url}</p>
            </>
        )
    }
}

export default DisplayVehicle;
