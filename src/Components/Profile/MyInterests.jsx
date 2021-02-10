import React from "react";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";

const MyInterests=()=>{
    return(
        <>
            <NavbarLogin/>
             <div className="profile-card profile-container">
                    <h2><b>My Intrests</b></h2>
                    <input type="checkbox" name="machine learning" value="ml" /> Machine Learning<br />
                    <input type="checkbox" name="artificial intelligence" value="Car" /> Artificial Intelligence<br />
                    <input type="checkbox" name="web development" value="Boat"
                        checked /> Web Development<br />
                    <p>And so on....</p>
            </div>
            <Footer/>

        </>
    );
};

export default MyInterests;