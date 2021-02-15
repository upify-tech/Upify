import React from 'react';
import { Redirect } from "react-router-dom";
// import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';
// import { Card } from '@material-ui/core';
// import HomeCard from './HomeCard';
import HomeWebinarsCard from './HomeWebinarsCard';
import HomeJobsCard from './HomeJobsCard';
import HomeCoursesCard from './HomeCoursesCard';
import HomeInternshipsCard from './HomeInternshipsCard';
import WelcomeNote from './WelcomeNote';
import Footer from "../Footer";
import NavbarLogin from './NavbarLogin';
// import { Typography } from '@material-ui/core';

const Home = () => {
    const token = localStorage.getItem("token");
    if(token == null){
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
                <WelcomeNote />
                <h2 className="center">Recommended Internships</h2>
                <HomeInternshipsCard />
                <hr />
                <h2 className="center">Recommended Jobs</h2>
                <HomeJobsCard />
                <hr />
                <h2 className="center">Recommended Courses</h2>
                <HomeCoursesCard />
                <hr />
                <h2 className="center">Recommended Webinars</h2>
                <HomeWebinarsCard />
                {/* <hr />
                <HomeJobsCard /> */}
            </div>
            <Footer />
        </>
    )
}

export default Home;