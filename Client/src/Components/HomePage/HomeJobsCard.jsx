import React from 'react';
import { useState, useEffect } from 'react';
// import Hdata from '../data/Hdata';
import HomedataJobs from './HomedataJobs';
import Container from '@material-ui/core/Container';
import HomeJobsData from '../../Data/HomeJobsData';
import axios from 'axios';

const HomeJobsCard = (props) => {
    // const x={"A":"a","b":"b","c":"c"};
    const [data, setData] = useState([]);

    const getData = () => {
        console.log("getting data");
        axios.get('/uploadjobs').then((response) => {
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
            <Container className="home-card-container" >
                {
                    data.slice(0,3).filter((val)=>{
                        if(props.Term===""){
                            return val;
                        }else if(val.title.toLowerCase().includes(props.Term.toLowerCase())){
                            return val
                        }
                    }).map((val, index) => {
                        return (
                            <>
                                <HomedataJobs
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
        </>
    )
}

export default HomeJobsCard;