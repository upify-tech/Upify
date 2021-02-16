import React,{useState,useEffect} from 'react';
import { Redirect } from "react-router-dom";
// import Home from './Home';
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import MainCoursesData from '../../Data/MainCoursesData';
import CoursesCard from './CoursesCard';
import WelcomeNote from './WelcomeNote';
// import Navbar from './Navbar';
import Footer from "../Footer";
import NavbarLogin from './NavbarLogin';
import axios from 'axios'


const Courses = () => {
    const [data,setData] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");
    const getData = () => {
      console.log("getting data");
      axios.get('/uploadcourses').then((response)=>{
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
            {/* <Navbar></Navbar> */}
            <NavbarLogin />
            <br/>
            <br/>
            {/* <WelcomeNote /> */}
            <Jumbotron fluid>
        <Container>
            <h1>Welcome Mohammed</h1>
                <p>
                 You are at the right place to find the suitable courses, internships, jobs to build your career.
                </p>
               <input type="text"
                  placeholder="Search.."
                  onChange={(event)=>{
                      setsearchTerm(event.target.value)
                  }} 
               />
        </Container>
        </Jumbotron>
                <Typography gutterBottom variant="h5" component="h2" className="center" id="home-typography">
                    Recommended Courses
                </Typography>
            <Container >
                {/* <RowComp /> */}

                {
                    data.filter((val)=>{
                        if(searchTerm===""){
                            return val;
                        }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((val, index) => {
                        return (
                            <>
                                <CoursesCard
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
            <Footer />

        </>
    )
}

export default Courses;