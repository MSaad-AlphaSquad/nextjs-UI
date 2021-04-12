import React from "react";
import NavBar from "./NavBar";

const Nav = () => {
  return (
    <div className="md:ml-20 ml-14">
      <div className="relative">
        <div
          className="w-half right-10 float-right p-80 mb-20 md:mb-0"
          style={{
            backgroundImage: `url("/images/gradiant.png")`,
          }}
        > <div className="absolute right-10 top-24">
          <img
            className="mt-20 "
            src="/images/widgets.png"
            alt="widgets"
            width="650"
          />
          </div>
        </div>
        <NavBar />
      </div>
      <div className="md:pt-56 py-40 md:mx-0 mx-24 ">
        <div className=" font-bold text-7xl">
          <h1>Believe.</h1>
          <h1>Review.</h1>
          <h1>Ship.</h1>
        </div>
        <div className="mt-10 text-gray-700">
          <h5>The next big thing starts here</h5>
          <h5>Get Prodify and be the first to market</h5>
          <h5>with an integrated product that you love</h5>
        </div>
        <div className="my-5">
          <button className="text-white bg-gradient-to-r py-2 rounded-sm  from-yellow-500 via-red-500 to-pink-500 px-28">
            Let's Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
