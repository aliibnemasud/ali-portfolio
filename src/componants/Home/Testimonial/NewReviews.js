import React, { useEffect, useState } from "react";
import Slider from "react-slick";
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
        Gather insights about myself from the feedback provided by my past clients.
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
        </Slider>
      </div>
    </section>
  );
};

export default NewReviews;
