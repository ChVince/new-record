import React from 'react'
import {Nav, NavItem, Button} from 'react-bootstrap'
require('../../styles/navbar.less');


class Navbar extends React.Component {
    render() {
        return (
            <header id="main-header">
                <div className="data-navbar navbar navbar-default navbar-fat navbar-clean">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">
                                <h1 className="greeting-logo">New Record</h1>
                            </a>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul id="main-nav" className="nav navbar-nav navbar-right">
                                <li> <Button bsSize="large" bsStyle="link">About</Button>
                                </li>
                                <li>
                                    <div className="shop-nav-button">
                                    <Button bsSize="large" bsStyle="link">Shop</Button>
                                    </div>
                                </li>
                                <li>
                                    <Button bsSize="large" bsStyle="customLogin">Login</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

export default Navbar;


{/*
 <div className="pull-right navbar-btn">
 <Button bsStyle="customLink">About</Button>
 <Button bsStyle="customLink">Shop</Button>
 <Button bsStyle="customLogin">Login</Button>
 </div>*/
}
