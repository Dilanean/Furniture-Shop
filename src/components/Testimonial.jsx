import React from "react";
import Stars from "./Stars";

const Testimonial = ({ bgImg, profileImg, name, review, raiting }) => {
  return (
    <div
      className="testimonial_card"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="testimonial_content">
        <div className="testimonial_profile-img">
          <img src={profileImg} alt="profile image" />
        </div>
        <p className="testimonial_name">{name}</p>
        <div className="testimonial_review">{review}</div>
        <div className="testimonial_raiting">{Stars(raiting)}</div>
      </div>
    </div>
  );
};

export default Testimonial;
