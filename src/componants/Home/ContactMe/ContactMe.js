import React, { useRef } from "react";
import "./ContactMe.css";
import contact from "../../img/contact.png";
import emailjs from "@emailjs/browser";
import { primaryButtonStyle } from "../../../utils/styles";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        process.env.REACT_APP_SERVICES_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          if(result.text === 'OK'){
            alert('Email Sent Success!')
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="my-5 py-5 bg-light mb-5">
      <div className="container">
        <h1 className="text-center my-3">Contact Me</h1>
        <p className="text-center mb-5">Drop a line. I am ready to help you!</p>
        <div className="row">
          <div className="col-lg-7 d-flex justify-content-between align-items-center">
            <img src={contact} className=" w-50 mx-auto" alt="contact" />
          </div>
          <div className="col-lg-5 shadow forma">
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <input
                className="form-control"
                name="from_name" 
                placeholder="Your Name"
                type="text"
              />
              <input
                className="form-control"
                name="email" 
                placeholder="example@mail.com"
                type="email"
              />
              <input
                className="form-control"
                name="budget" 
                placeholder="$$$"
                type="text"
              />
              <textarea
                className="form-control"
                rows="5"
                name="message" 
                placeholder="Project Description"
                type="text"
              />
              <input type="submit" style={primaryButtonStyle} value="Submit" />
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
