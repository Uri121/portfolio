import React from "react";
import "../styles/Contact.css";
function Contact(props) {
  return (

    <div className="my-form-container">
     
      <form  className="my-form" action="https://formspree.io/uri.rubin121@gmail.com" method="POST">
      <h1>Send A Message</h1>
        <input type="text" name="field1" placeholder="Your Name" required />
        <input
          type="email"
          name="field2"
          placeholder="Email Address"
          required
        />
        <textarea
          name="field3"
          placeholder="Type your Message"
          required
        ></textarea>
        <input type="submit" value="Send" />
      </form>
      <div id="footer" className="page-footer">
       <div className="container-fluid text-center py-5">
         <h5 style={{ color: "#F7F7F7" }} className="mt-5">
           2019 &copy; Copyright <strong>Uri Rubin</strong>. All Rights
           Reserved
         </h5>
       </div>
        </div>
    </div>
  );
}

export default Contact;
