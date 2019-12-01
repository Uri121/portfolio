import React from "react";

function Contact(props) {
  return (
    <div className="form-style-6">
      <h1>Send A Message</h1>
      <form action="https://formspree.io/uri.rubin121@gmail.com" method="POST">
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
    </div>
  );
}

export default Contact;
