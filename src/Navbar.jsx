import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
            <Link to="/Principale">Principale</Link>
            <NavLink to="/https://yalla.koraextra.com/">Match</NavLink>

                
            </div>
        )
    }
}

export default Navbar
