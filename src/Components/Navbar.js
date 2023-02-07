import React from "react";
import { ReactDOM } from "react";

import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-opacity-58">
                <div className="container-fluid">
                    <Link className="navbar-brand" id="Main" to="/">KMES Alumni Network</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NAVIGATION"
                        aria-controls="NAVIGATION" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="NAVIGATION">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-house-door-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                </svg> Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/events"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" fill="currentColor" className="bi bi-calendar-event-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                </svg> Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#about"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" fill="currentColor" className="bi bi-chat-right-dots-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg> Contact</Link>
                            </li>
                        </ul>
                    </div>

                   <Login/>

                </div>
            </nav>
            
        </div>
    )
}
export default Navbar;