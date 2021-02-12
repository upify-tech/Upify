import React from "react";
import Switches from "./Switches";
import EditIcon from "@material-ui/icons/Edit";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";
// import HomeJobsCard from "../HomePage/HomeJobsCard";


const Profile = () => {
    return (
        <>
            <NavbarLogin />
            <div className="profile-card profile-container">
                <h2 className="center">Profile Details</h2>
                <div className="edit-card">
                    <div className="edit-icon">
                        <a href="/profile/edit-icon"><EditIcon /></a>
                    </div>
                    <h4>Name:Name of the person</h4>
                    <h4> Email:Email of the person</h4>
                </div>
            </div>
            <div className="profile-card profile-container">
                <h2><b>My Intrests</b></h2>
                <input type="checkbox" name="machine learning" value="ml" /> Machine Learning<br />
                <input type="checkbox" name="artificial intelligence" value="ai" /> Artificial Intelligence<br />
                <input type="checkbox" name="web development" value="wd"
                    checked /> Web Development<br />
                {/* <p>And so on....</p> */}
            </div>
            {/* <div className="profile-card profile-container">
                <h2><b>My Courses</b></h2>
                <div className="see-div">
                <HomeJobsCard/>
                    <a href="/profile/mycourses" className="see-btn">See more...</a>
                </div>
            </div>
            <div className="profile-card profile-container">
                <h2><b>My Internships</b></h2>
                <div className="see-div">
                    <a href="/profile/myinternships" className="see-btn">See more...</a>
                </div>
            </div>
            <div className="profile-card profile-container">
                <h2><b>My Jobs</b></h2>
                <div className="see-div">
                    <a href="/profile/myjobs" className="see-btn">See more...</a>
                </div>
            </div>
            <div className="profile-card profile-container">
                <h2><b>My Webinars</b></h2>
                <div className="see-div">
                    <a href="/profile/mywebinars" className="see-btn">See more...</a>
                </div>
            </div> */}
            <div className="profile-card profile-container " id="settings-section">

                <h2><b>Account Settings</b></h2><hr />

                <div className="notification">
                <h3>Notification preferences</h3>
                    <p>Receive notification using E-mail: <span> <Switches /> </span></p>
                    <p>Receive notification using SMS: <span> <Switches /> </span></p>
                </div><hr />

                <h4>Change Password</h4>
                <div className="edit-icon">
                    <a href="/profile/change-password"><EditIcon /></a>
                </div>
                <p>Password is case-sensitive and must be at least 6 characters and maximum 16 characters long. A good password should contain a combination of upper-case and lower-case letters, numbers and symbols. Allowed special characters are @#-_$%^&+=§!?</p>
            </div>
            <Footer />


        </>
    );
};

export default Profile;