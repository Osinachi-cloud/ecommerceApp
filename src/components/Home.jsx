import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div className="card bg-dark text-white border-0">
        <img
          src="/img/bg-2.jpg"
          className="card-img"
          alt="background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">Card title</h5>
            <p className="card-text lead fs-2">
                Your favorite Store
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
