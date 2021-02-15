import React,{useState,useEffect} from 'react';
import { Redirect } from "react-router-dom";
// import Home from './Home';
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import MainInternshipsData from '../../Data/MainInternshipsData';
import InternshipsCard from './InternshipsCard';
import WelcomeNote from './WelcomeNote';
// import Navbar from './Navbar';
import Footer from "../Footer";
import NavbarLogin from './NavbarLogin';
import axios from 'axios';

const Internships = () => {
    const [data,setData] = useState([]);

    const getData = () => {
      console.log("getting data");
      axios.get('/uploadinternship').then((response)=>{
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
            {/* <Navbar></Navbar> */}
            <NavbarLogin />
            <br/>
            <br/>
            <WelcomeNote />
            <Container>
                <Typography gutterBottom variant="h5" component="h2" className="center">
                    Recommended Internship
                </Typography>
                {/* <RowComp /> */}

                {
                    data.map((val, index) => {
                        return (
                            <>
                                <InternshipsCard
                                  title={val.title}
                                    speaker_name={val.imgsrc}
                                    about_speaker={val.about_speaker}
                                    domain={val.domain} 
                                    description={val.description}
                                    audience={val.audience}
                                    time={val.time}
                                    date={val.date}
                                    online_offline={val.online_offline} 
                                    location={val.location}
                                    link={val.linl}
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

export default Internships;