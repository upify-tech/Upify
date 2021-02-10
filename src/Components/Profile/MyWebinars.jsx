import React from "react";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";

const MyWebinars = () => {
    return (
        <>
            <NavbarLogin />
            <div className="profile-card profile-container">
                <h2><b>My Webinars</b></h2>
                <div className="see-div">
                    <a href="/profile/mywebinars" className="see-btn">See more...</a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyWebinars;