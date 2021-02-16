import React from "react";
import HomeInternshipsCard from "../HomePage/HomeInternshipsCard";

const Home = () => {
    return (
        <>
            <div id="home-section">
                <h1 className="center">Trending Technologies(Sample)</h1>
                <div>
                    <HomeInternshipsCard />
                    {/* <h2>Technology news</h2> */}
                    {/* <h3 >Welcome Upify, here you can upgrade yourself perfectly.Welcome Upify, here you can upgrade yourself perfectly.Welcome Upify, here you can upgrade yourself perfectly.</h3>
                    <HomeInternshipsCard/> */}
                </div>
            </div>
        </>
    );
};

export default Home;