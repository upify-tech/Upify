import React,{useState,useEffect} from 'react';
import { Redirect } from "react-router-dom";
// import Hdata from '../data/Hdata';
import Homedata from './Homedata';
import Container from '@material-ui/core/Container';
import HomeInternshipsData from '../../Data/HomeInternshipsData';
import axios from 'axios';


const HomeInternshipsCard = () => {
    // const x={"A":"a","b":"b","c":"c"};
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

            <Container className="home-card-container">
                {
                    data.map((val, index) => {
                        return (
                            <>
                                <Homedata
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