import React from "react";

const Socials = () => {
  return (
    <div className="md:mx-20 mx-5">
      <div className="md:mx-40 mx-20">
        <div className="mb-40 md:px-20">
          <img   src="/images/Group657.png" alt="socials-img" width="941" />
        </div>
      </div>
      <div>
      <div className="w-3/4  container mx-auto">
      <div>
        <h1 className="md:text-5xl text-3xl font-bold leading-snug text-center">
          "Thanks guys, keep up the good work! I'd be lost without Prodify. The
          very best. Prodify is both attractive and highly adaptable."
        </h1>
        <h1 className="text-pink-500 md:my-20 my-11 text-3xl font-bold leading-snug text-center"> - Ben P.</h1>
        </div>
        </div>
      </div>
     
       <div className="grid md:grid-cols-4 grid-cols-2 md:gap-40 gap-16 md:my-40 my-36 mx-32 md:mx-0">
      <div>
        <h1 className="text-5xl font-bold">40k +</h1>
        <p className="my-3 font-light text-lg">Downloads</p>
      </div>
      <div >
      <h1 className="text-5xl font-bold" >200K</h1>
        <p className="my-3 font-light text-lg">Users/Teams</p>
      </div>
      <div>
      <h1 className="text-5xl font-bold">958</h1>
        <p className="my-3 font-light text-lg">Products Developed</p>
      </div>
      <div>
      <h1 className="text-5xl font-bold">10</h1>
        <p className="my-3 font-light text-lg">Awards Bagged</p>
      </div>
      </div>
  
  <div className="my-40">
    <div className="w-3/4  container mx-auto">
    <img src="/images/CTA.png" alt="footer-img"/>
    </div>
  </div>
      
      </div>
    
  );
};

export default Socials;
