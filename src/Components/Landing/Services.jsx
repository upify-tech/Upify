import React from "react";
import HomeCoursesCard from "../HomePage/HomeCoursesCard";
import HomeInternshipsCard from "../HomePage/HomeInternshipsCard";
import HomeJobsCard from "../HomePage/HomeJobsCard";
import HomeWebinarsCard from "../HomePage/HomeWebinarsCard";

const Services = ()=>{
    return(
        <>
        <div  id="services-section">
            <h1 className="center">Our Services</h1>
            <h2 className="center">Courses Samples</h2>
            <HomeCoursesCard/>
            <h2 className="center">Internships Samples</h2>
            <HomeInternshipsCard/>
            <h2 className="center">Jobs Samples</h2>
            <HomeJobsCard/>
            <h2 className="center">Webinars Samples</h2>
            <HomeWebinarsCard/>
        </div>
        </>
    ); 
};

export default Services;