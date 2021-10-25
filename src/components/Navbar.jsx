import React from "react";
import { Link, NavLink } from 'react-router-dom'

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <nav className="d-flex navbar navbar-expand-sm navbar-light">
                <div className="navbar-nav ms-auto pe-2 justify-content-end">
                <NavLink className="nav-link" exact to="/" activeClassName="text-primary">Go Home</NavLink>
                <NavLink className="nav-link" exact to="/films" activeClassName="text-primary">See Films</NavLink>
                <NavLink className="nav-link" exact to="/people" activeClassName="text-primary">See People</NavLink>
                <NavLink className="nav-link" exact to="/locations" activeClassName="text-primary">See Locations</NavLink>
                </div>
            </nav>
        )
    }
}

export default Navbar