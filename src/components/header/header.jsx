import React, { useState } from "react";
import './stylesheet.css'
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Themetoggle from "../themetoggle/themetoggle.jsx";
import { Nav } from "react-bootstrap";

const Headermain = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle("ovhidden");
    };

    return (
        <>
            <header className="site__header">
                <Nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex align-items-center">
                    <Link  className="navbar-brand nav_ac" to="/">
                        CARS N GAZ
                    </Link>
                    <div className="d-flex align-items-center">
                        <Themetoggle />
                        <button className="menu__button  nav_ac" onClick={handleToggle}>
                            {!isActive ? <VscClose /> : <VscGrabber />}
                        </button>
                    </div>
                </div>
                </Nav>
                

                <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
                    <div className="bg__menu h-100">
                        <div className="menu__wrapper">
                            <div className="menu__container p-3">
                                <ul className="the_menu">
                                    <li className="menu_item ">
                                        <Link  onClick={handleToggle} to="/" className="my-3">Events</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/about" className="my-3">About Us</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/contact" className="my-3"> Contact Us </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
                        <div className="d-flex">
                            <p>Facebook</p>
                            <p>Github</p>
                            <p>Twitter</p>
                        </div>
                        <p className="copyright m-0">Copyright© Enes Eyibilen</p>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Headermain;
