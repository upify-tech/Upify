import React from 'react';
// import Hdata from '../data/Hdata';
import Homedata from './Homedata';
import Container from '@material-ui/core/Container';
import HomeInternshipsData from '../../Data/HomeInternshipsData';


const HomeInternshipsCard = () => {
    // const x={"A":"a","b":"b","c":"c"};
    return (
        <> 

            <Container className="home-card-container">
                {
                    HomeInternshipsData.map((val, index) => {
                        return (
                            <>
                                <Homedata
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

export default HomeInternshipsCard;