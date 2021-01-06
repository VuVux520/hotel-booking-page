import React, { Component } from 'react';
import Logo from '../assets/images/logo1.jpeg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';

interface IStateNavbar {
    isOpen: boolean;
}


export default class Navbar extends Component<{}, IStateNavbar> {

    public readonly state: Readonly<IStateNavbar> = {
        isOpen: false,
    }

    public render() {
        const { isOpen } = this.state;
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={Logo} alt="Hotel Booking" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                        <li><Link to="/booking-page">Booking</Link></li>
                        <li><Link to="/servicepage">Contact us</Link></li>
                    </ul>
                    <div className="navbar-right">
                        <CallIcon/>
                        <h2 className="title-right">1800-0909</h2>
                    </div>
                </div>
            </nav>
        )
    }

    private handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
}
