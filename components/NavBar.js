import React from "react";


const NavBar = () => {
    return (
        <div className="">
        <div className="mt-2 float-left absolute">
        <img
            className="w-20 h-20 p-0"
            src="/images/logo.png"
            alt="logo"
          />
          </div>
            <div className="float-right md:pt-7 md:mt-0 mt-28 mr-16 text-white absolute md:right-2">
                <a className="w-16 h-5 mr-8" href="#home">
                  Home
                </a>
                <a className="w-16 h-5 mr-8" href="#news">
                  About Us
                </a>
                <a className="w-16 h-5 mr-8" href="#contact">
                  Pricing
                </a>
                <a className="w-16 h-5 mr-8" href="#about">
                  Resources
                </a>
                <a className=" bg-white py-1.5 px-6 h-5 mr-8 rounded-md bg-opacity-25" href="#about">
                  Sign In ➔
                </a>
              </div>
              </div>
    )
}

export default NavBar;