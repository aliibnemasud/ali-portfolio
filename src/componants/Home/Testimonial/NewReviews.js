import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import firstone from "../../img/clientimage/firstone.jpeg";
import secondImage from "../../img/clientimage/third.jpg";
import thirdImage from "../../img/clientimage/second.jpg";
import Review from "./Review";
import axios from "axios";

const NewReviews = () => {
  const [review, setReviews] = useState([]);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getReviews = async () => {
    await axios.get("reviews.json").then((res) => {
      setReviews(res?.data);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <section id="testimonial" className="my-5 py-5 testimonial">
      <div className="container">
        <h1 className="text-center my-3">Testimonial</h1>
        <p className="text-center mb-5 fs-5">
          Know about myself from here from my previous clients
        </p>
        <Slider {...settings}>
          {review.map((review) => {
            return (
              <Review
                name={review?.name}
                image={review?.image}
                review={review?.review}
                country={review?.country}
              />
            );
          })}

          {/* <Review
            name="Revga Wright"
            image={secondImage}
            review="I have worked with Ali Ibne Masud before and I will in the future.
            Excellent work and communication. You won't be disappointed!"
            country="United States"
          />
          <Review
            name="Revga Wright"
            image={thirdImage}
            review="I have worked with Ali Ibne Masud before and I will in the future.
            Excellent work and communication. You won't be disappointed!"
            country="United States"
          /> */}
        </Slider>
      </div>
    </section>
  );
};

export default NewReviews;
