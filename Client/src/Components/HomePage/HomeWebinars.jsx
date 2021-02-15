import React,{useState,useEffect} from 'react';
import { Redirect } from "react-router-dom";
// import Home from './Home';
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import MainWebinarsData from '../../Data/MainWebinarsData';
import WebinarsCard from './WebinarsCard';
import WelcomeNote from './WelcomeNote';
// import Navbar from './Navbar';
import NavbarLogin from './NavbarLogin';
import Footer from "../Footer";
import axios from 'axios';

const Webinars = () => {
    const [data,setData] = useState([]);

    const getData = () => {
      console.log("getting data");
      axios.get('/uploadwebinar').then((response)=>{
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
            <WelcomeNote />
            <Container>
                <Typography gutterBottom variant="h5" component="h2" className="center">
                    Recommended Webinars
                </Typography>
                {/* <RowComp /> */}

                {
                    data.map((val, index) => {
                        return (
                            <>
                                <WebinarsCard
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

export default Webinars;