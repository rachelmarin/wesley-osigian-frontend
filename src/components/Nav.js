import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/About"> About Wesley Osigian </Link></li>
                    <li><Link to="/Books"> Books By Wesley </Link></li>
                    
                </ul>
            </nav>
        )
    }
}

export default Nav;