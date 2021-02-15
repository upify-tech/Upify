import React,{useState,useEffect} from 'react';
import { Redirect } from "react-router-dom";
// import Home from './Home';
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import JobsCard from './JobsCard';
import MainJobsData from '../../Data/MainJobsData';
import WelcomeNote from './WelcomeNote';
// import Navbar from './Navbar';
import NavbarLogin from './NavbarLogin';
import Footer from "../Footer";
import axios from 'axios';

const Jobs = () => {
    const [data,setData] = useState([]);



    const getData = () => {
      console.log("getting data");
      axios.get('/uploadjob').then((response)=>{
        const gettingdata = response.data;
        console.log(gettingdata);
        setData(()=>{
          return(gettingdata)
        })
        console.log(data);
      })}
  
      useEffect(()=>{ 
        getData()
    },[]);
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
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
                    data.map((val, index) => {
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