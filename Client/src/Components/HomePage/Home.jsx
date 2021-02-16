import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
// import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';
// import { Card } from '@material-ui/core';
// import HomeCard from './HomeCard';
import HomeWebinarsCard from './HomeWebinarsCard';
import HomeJobsCard from './HomeJobsCard';
import HomeCoursesCard from './HomeCoursesCard';
import HomeInternshipsCard from './HomeInternshipsCard';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import WelcomeNote from './WelcomeNote';
import Footer from "../Footer";
import NavbarLogin from './NavbarLogin';
// import { Typography } from '@material-ui/core';

const Home = () => {
    const [searchTerm, setsearchTerm] = useState("");
    const token = localStorage.getItem("token");
    if (token == null) {
        return <Redirect to="/signup" />
    }
    return (
        < >
            <div className="home">
                {/* <h1>home</h1> */}
                {/* <Navbar className="home"></Navbar> */}
                <NavbarLogin />
                <br />
                <br />
                <Jumbotron fluid>
                    <Container>
                        <h1>Welcome Mohammed</h1>
                        <p>
                            You are at the right place to find the suitable courses, internships, jobs to build your career.
                        </p>
                        <input type="text"
                            placeholder="Search.."
                            onChange={(event) => {
                                setsearchTerm(event.target.value)
                            }}
                        />
                    </Container>
                </Jumbotron>
                {/* <WelcomeNote /> */}
                <h2 className="center">Recommended Internships</h2>
                <HomeInternshipsCard  Term={searchTerm}/>
                <hr />
                <h2 className="center">Recommended Jobs</h2>
                <HomeJobsCard Term={searchTerm}/>
                <hr />
                <h2 className="center">Recommended Courses</h2>
                <HomeCoursesCard Term={searchTerm}/>
                <hr />
                <h2 className="center">Recommended Webinars</h2>
                <HomeWebinarsCard Term={searchTerm}/>
                {/* <hr />
                <HomeJobsCard /> */}
            </div>
            <Footer />
        </>
    )
}

export default Home;