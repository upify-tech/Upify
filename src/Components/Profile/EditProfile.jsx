import React from "react";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";

const EditProfile=()=>{
    return(
        <>
            <NavbarLogin/>
            <div className="profile-card profile-container">
                    <h3>Change Profile Details</h3>

                    <form action="#">
                        <div className="form-item">
                            <label for="fname">First Name:</label><br />
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>

                        <div className="form-item">
                            <label for="lname">Last Name:</label><br />
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        </div>

                        <div className="form-item">
                            <label for="email">Email:</label><br />
                            <input type="text" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-item">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
            </div>
            <Footer/>

        </>
    );
};

export default EditProfile;