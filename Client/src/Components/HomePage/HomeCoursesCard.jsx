import React from 'react';
// import Hdata from '../data/Hdata';
import HomedataCourses from './HomedataCourses';
import Container from '@material-ui/core/Container';
import HomeCoursesData from '../../Data/HomeCoursesData'; 
import '../../CSS/HomePage/Home.css';


const HomeCoursesCard = (props) => {
    // const x={"A":"a","b":"b","c":"c"};
    return (
        <>
            <Container className=" home-card-container">
                {
                    HomeCoursesData.slice(0,3).filter((val)=>{
                        if(props.Term===""){
                            return val;
                        }else if(val.title.toLowerCase().includes(props.Term.toLowerCase())){
                            return val
                        }
                    }).map((val, index) => {
                        return (
                            <>
                                <HomedataCourses
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

export default HomeCoursesCard;