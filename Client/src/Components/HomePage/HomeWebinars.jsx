import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
// import Home from './Home';
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import MainWebinarsData from '../../Data/MainWebinarsData';
import WebinarsCard from './WebinarsCard';
import WelcomeNote from './WelcomeNote';
// import Navbar from './Navbar';
import NavbarLogin from './NavbarLogin';
import Footer from "../Footer";
import axios from 'axios';

const Webinars = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");

    const getData = () => {
        console.log("getting data");
        axios.get('/uploadwebinar').then((response) => {
            const gettingdata = response.data;
            console.log(gettingdata);
            setData(() => {
                return (gettingdata)
            })
            console.log(data);
        })
    }

    useEffect(() => {
        getData()
    }, []);
    const token = localStorage.getItem("token");
    if (token == null) {
        return <Redirect to="/signup" />
    }
    return (
        <>
            {/* <Home></Home> */}
            {/* <Home></Home> */}
            {/* <Navbar></Navbar> */}
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
            <br />
            {/* <WelcomeNote /> */}

            <Typography gutterBottom variant="h5" component="h2" className="center">
                Recommended Webinars
                </Typography>
            <Container className="home-card-container">
                {/* <RowComp /> */}

                {
                    data.filter((val) => {
                        if (searchTerm === "") {
                            return val;
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val, index) => {
                        return (
                            <>
                                <WebinarsCard
                                    title={val.title}
                                    speaker_name={val.speaker_name}
                                    about_speaker={val.about_speaker}
                                    domain={val.domain}
                                    description={val.description}
                                    audience={val.audience}
                                    time={val.time}
                                    date={val.date}
                                    online_offline={val.online_offline}
                                    location={val.location}
                                    link={val.link}
                                />
                            </>
                        );
                    })

                }
            </Container>
            <Footer />

        </>
    )
}

export default Webinars;