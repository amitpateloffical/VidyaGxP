// MySlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MySlider = () => {
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`slider-arrow slider-prev-arrow ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`slider-arrow slider-next-arrow ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: true,
    // centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings}>
      {/* First Slide */}
      <div className="container-fluid    mb-2">
        <div className="container ">
          <div className="row g-5 ">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <div className="btn btn-sm border rounded-pill text-dark px-3 mb-3 animated slideInRight">
                VidhyaGxP
              </div>
              <h1 className="display-4 text-dark mb-4 animated slideInRight">
                Artificial Intelligence for Your Business
              </h1>
              <h5 className="text-dark mb-4 animated slideInRight ">
                Empowering Your Business with Intelligent Solutions: Harness the Power of Artificial Intelligence to
                Optimize, Innovate, and Excel in the Digital Era.
              </h5>
              <a href="" className="btn btn-dark py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">
                Read More
              </a>
              <a href="/contact" className="btn btn-outline-dark py-sm-3 px-sm-5 rounded-pill animated slideInRight">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img width={"600px"} className="img-head " src="https://media.istockphoto.com/id/1295786990/vector/artificial-intelligence-cyborg-technological-brain-on-white-background-computer-circuit.jpg?s=612x612&w=0&k=20&c=JawjYu6toP0BJqwvCxxWwc84e903faIhwRr74bO16H4=" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Second Slide */}

      {/* Third Slide */}
      <div className="container-fluid    mb-2">
        <div className="container ">
          <div className="row g-5 ">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <div className="btn btn-sm border rounded-pill text-dark px-3 mb-3 animated slideInRight">
                VidhyaGxP
              </div>
              <h1 className="display-4 text-dark mb-4 animated slideInRight">
                Artificial Intelligence for Your Business
              </h1>
              <p className="text-dark mb-4 animated slideInRight">
                Empowering Your Business with Intelligent Solutions: Harness the Power of Artificial Intelligence to
                Optimize, Innovate, and Excel in the Digital Era.
              </p>
              <a href="" className="btn btn-dark py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">
                Read More
              </a>
              <a href="/contact" className="btn btn-outline-dark py-sm-3 px-sm-5 rounded-pill animated slideInRight">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img width={"600px"} className="img-head " src="https://img.freepik.com/premium-vector/human-face-made-by-digital-circuit_1302-13285.jpg?w=826" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default MySlider;
