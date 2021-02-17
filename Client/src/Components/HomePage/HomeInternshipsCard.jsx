import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
// import Hdata from '../data/Hdata';
import HomedataInternships from './HomedataInternships';
import Container from '@material-ui/core/Container';
import '../../CSS/HomePage/Home.css';
import HomeInternshipsData from '../../Data/HomeInternshipsData';
import axios from 'axios';


const HomeInternshipsCard = (props) => {
    const [data, setData] = useState([]);

    const getData = () => {
        console.log("getting data");
        axios.get('/uploadinternship').then((response) => {
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

    return (
        <>

            <Container className="home-card-container">
            {/* filter((val)=>{
                        if(props.Term===""){
                            return val;
                        }else if(val.title.toLowerCase().includes(props.Term.toLowerCase())){
                            return val;
                        }
                    }). */}
                {
                    data.slice(0,3).map((val, index) => {
                        return (
                            <>
                                <HomedataInternships
                                    title= {val.title}
                                    description= {val.description}
                                    comp_name= {val.comp_name}
                                    domain=  {val.domain}
                                    req_skills= {val.req_skills}
                                    add_skills= {val.add_skills}
                                    duration= {val.duration}
                                    location= {val.location}
                                    education= {val.education}
                                    experience= {val.experience}
                                    ctc= {val.ctc}
                                    link= {val.link}
                                    // imgsrc={val.imgsrc}"https://media.timeout.com/images/105630861/750/422/image.jpg"
                                    // title={val.title}"A ORIGINAL NETFLIX SERIES"
                                    // sname={val.sname}"Stranger Things"
                                    // link={val.link}"https://www.netflix.com/in/title/80057281"
                                />
                            </>
                        );
                    })

                }
            </Container>
        </>
    )
}

export default HomeInternshipsCard;