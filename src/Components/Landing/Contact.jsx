import React from "react";

const Contact = () => {
    return (
        <>
            <div id="contact-section">
            <h1 className="center h-primary">Contact Us</h1>
                <div id="contact-box">
                    <form action="">
                        <div class="form-group">
                            <label for="name">Name: </label>
                            <input type="text" name="name" id="name" placeholder="Enter your name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email: </label>
                            <input type="email" name="name" id="email" placeholder="Enter your email" />
                        </div>
                        {/* <div class="form-group">
                            <label for="phone">Phone Number: </label>
                            <input type="phone" name="name" id="phone" placeholder="Enter your phone" />
                        </div> */}
                        <div class="form-group">
                            <label for="message">Message: </label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-btn">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;