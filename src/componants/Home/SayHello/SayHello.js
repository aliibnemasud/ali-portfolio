import React from "react";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import "./Sayhello.css";

const SayHello = () => {
  const goToContact = () => {
    window.location.href = `${window.origin}/?#contact`;
  };
  return (
    <section className="my-5 py-5">
      <h4 className="text-center">Have any project in mind?</h4>
      <h1 className="text-center my-4 sayhello">Just Say Hello !</h1>
      {/* <button  className='hireme'></button> */}
      <PrimaryBtn click={goToContact}>Hire Me</PrimaryBtn>
    </section>
  );
};

export default SayHello;
