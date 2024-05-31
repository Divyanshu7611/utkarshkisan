import React from "react";

function Testimonials({ description, name, city }) {
  return (
    <div className="p-2" id="testiScroll">
      <div className="testimonials-fluid">
        <div className="container">
          <div className="row people">
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">{description}</p>
              </div>
              <div className="author">
                <h5 className="name">{name}</h5>
                <p className="title">{city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
