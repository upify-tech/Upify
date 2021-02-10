import React from "react";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";

const MyInternships = () => {
    return (
        <>
            <NavbarLogin />
            <div className="profile-card profile-container">
                <h2><b>My Internships</b></h2>
                <div className="see-div">
                    <a href="/profile/myinternships" className="see-btn">See more...</a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyInternships;