import React from "react";

const Footer = () => {
  return (
    <div className="mx-20 mt-56 ">
      <div className="">
        <div className="w-24 container mx-auto ">
          <img className="w-20 h-20 p-0" src="/images/logo.png" alt="logo" />
        </div>
        <div className="w-40 my-4 container mx-auto font-bold ">
          <h1>Build. Review. Ship.</h1>
        </div>
        <div className="w-40  my-4 container mx-auto grid grid-cols-2 text-xs">
          <button className="w-38 font-light">Download Now</button>
          <button className="w-24 font-light">License</button>
        </div>
        <div className="md:w-4/5 container mx-auto md:my-11 my-5 font-light md:text-sm text-xs ">
          <div className="md:mx-44">
            <a className="w-11 h-5 mx-5" href="#home">
              About
            </a>
            <a className="w-11 h-5 mx-5" href="#news">
              Features
            </a>
            <a className="w-11 h-5 mx-5" href="#contact">
              Pricing
            </a>
            <a className="w-11 h-5 mx-5" href="#about">
              Careers
            </a>
            <a className="w-11 h-5 mx-5" href="#about">
              Help
            </a>
            <a className="w-11 h-5 mx-5" href="#about">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="md:w-4/5 container mx-auto my-11 font-light md:text-sm text-xs md:px-14 px-36">
            <h1 className="w-60 md:mx-72">
            © 2020 Prodify. All rights reserved
            </h1>
        
        </div>
        <hr></hr>
        <div>

        </div>
        <div className="w-60  my-12 container mx-auto grid grid-cols-2 text-xs">
          <button className="w-28 font-light"><img src="/images/appstore.png" alt="appstore" /></button>
          <button className="w-28 font-light"><img src="/images/googleplay.png" alt="appstore" /></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
