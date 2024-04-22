import React from "react";

function Testimonials() {
  return (
    <div>
      <div className="testimonials-fluid">
        <div className="container">
          <div className="row people">
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  &quot;Aenean tortor est, vulputate quis leo in, vehicula
                  rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam
                  varius finibus est. &quot;
                </p>
              </div>
              <div className="author">
                <img
                  className="rounded-circle"
                  src="https://i.pinimg.com/736x/09/34/cb/0934cbdc0fa1de3cb71f909e059318f3.jpg"
                />
                <h5 className="name">Ben Johnson</h5>
                <p className="title">New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
