import React from "react";
import qota from "../../img/quote.png";

const Review = ({image, name, country, review}) => {
    console.log(image)
  return (
    <div className="bg-light mx-2">
      <div className="p-4">
        <img src={qota} className="d-block ms-auto" width="80px" alt="" />
        <p className="">
          {review}
        </p>
        <div className="d-flex justify-content-around align-itmes-center">
          <img className="rounded-circle" src={image} width="90px" alt="" />
          <div className="pt-3">
            <h4 className="m-0">{name}</h4>
            <p className="m-0">{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
