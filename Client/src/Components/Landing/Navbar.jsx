import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg" >
                <div className="row" >
                    <div className="col-10 mx-auto" >
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="/">Upify</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li className="nav-item" >
                                        <a className="nav-link nav-active" href="/"> Home </a>
                                    </li>
                                    <li className="nav-item" >
                                        <a className="nav-link  nav-active" href="/#services-section" > Services </a>
                                    </li>
                                    <li className="nav-item" >
                                        <a className="nav-link  nav-active" href="/#about-section" > About </a>
                                    </li>
                                    <li className="nav-item" >
                                        <a className="nav-link nav-active" href="/#contact-section" > Contact </a>
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="https://www.youtube.com/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown</a>
                                        <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="https://www.youtube.com/">Action</a>
                                            <a className="dropdown-item" href="https://www.youtube.com/">Another action</a>
                                            <a href="https://www.youtube.com/" target='/' > Youtube </a>
                                            <a href="https://www.techgig.com/" target='/' > Techgig </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="https://www.youtube.com/">Something else here</a>
                                        </div>
                                    </li> */}
                                    <li className="nav-item">
                                        <a className="s-button" href="/signup" > Sign in </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;

