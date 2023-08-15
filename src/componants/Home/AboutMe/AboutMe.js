import React from "react";
import Aboutme from "../../img/aboutme.png";
import Downloadcv from "../../Shared/Downloadcv";
import "./Anoutme.css";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="container d-flex flex-wrap justify-content-between align-items-center aboutMePadding"
    >
      <img className="img-fluid col-lg-5" src={Aboutme} alt="" />
      <div className="col-lg-6">
        <h1>About Me</h1>
        <p className="my-4">
          Greetings, <br /> <br /> I am a seasoned Full Stack Web Developer
          equipped with a diverse skill set encompassing <u className="fw-bold text-dark">Programming Languages: </u> JavaScript, TypeScript, C, C++{" "}
          <u className="fw-bold text-dark">Frontend:</u> React, Next.js, React,Native, Expo, Redux, React
          Router, JWT, Firebase, ES6 <u className="fw-bold text-dark">Backend:</u> Express.js, Node.js,
          MongoDB, Mongoose <br /> <u className="fw-bold text-dark">Version Control & Deployment:</u> Git, Docker, AWS, Heroku,
          Vercel <u className="fw-bold text-dark">GitHub APIs & Libraries: </u>Google API, TensorFlow.js, JQuery, <u className="fw-bold text-dark">
          REST API Web Technologies:</u> HTML, CSS, Bootstrap, Tailwind, and adept problem-solving abilities.
        </p>
        
        <p className="mb-5">
          I thrive on challenges and relish the chance to participate in
          projects that push me beyond my comfort zone, encouraging continual
          learning and the adoption of new development techniques. This
          commitment to growth is not only important to me personally but also
          integral to my success within the realm of web development. It's worth
          noting that I bring professional experience as a freelancer on
          platforms like{" "}
          <a
            target="_blank"
            className="text-dark"
            href="https://www.upwork.com/freelancers/~0161a4b11c6d2a5cd9"
            rel="noreferrer"
          >
            Upwork
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            className="text-dark"
            href="https://www.fiverr.com/aliibnemasud"
            rel="noreferrer"
          >
            Fiverr
          </a>
          .
        </p>

        <p className="mb-5">
          Thank you for investing your time in reading this message. I eagerly
          anticipate the possibility of connecting with you to discuss potential
          opportunities. If you have any inquiries, please don't hesitate to
          ask; I am always available to provide answers. Your consideration is
          highly valued. <br />
          <br /> Warm regards
        </p>

        <Downloadcv />
      </div>
    </div>
  );
};

export default AboutMe;
