import React from 'react';
// import Home from './Home';
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import JobsCard from './JobsCard';
import MainJobsData from '../../Data/MainJobsData';
import WelcomeNote from './WelcomeNote';
// import Navbar from './Navbar';
import NavbarLogin from './NavbarLogin';
import Footer from "../Footer";

const Jobs = () => {
    return (
        <>

            {/* <Home></Home> */}

            {/* <Home></Home> */}
            {/* <Navbar /> */}
            <NavbarLogin />
            <br/>
            <br/>
            <WelcomeNote />
            <Container>
                <Typography gutterBottom variant="h5" component="h2" className="center">
                    Recommended Jobs
                </Typography>
                {/* <RowComp /> */}

                {
                    MainJobsData.map((val, index) => {
                        return (
                            <>
                                <JobsCard
                                    imgsrc={val.imgsrc}//"https://media.timeout.com/images/105630861/750/422/image.jpg"
                                    title={val.title}//"A ORIGINAL NETFLIX SERIES"
                                    sname={val.sname}//"Stranger Things"
                                    link={val.link}//"https://www.netflix.com/in/title/80057281"
                                />
                            </>
                        );
                    })

                }
            </Container>
            <Footer/>

        </>
    )
}

export default Jobs;