import React from 'react';


const Section1 = () => {
    return (
    <div className="md:ml-20 ml-14 md:my-40 mb-44 md:mr-20 grid md:grid-flow-col sm:grid-col-1">
    <div className="" style={{
            backgroundImage: `url("/images/peter-olexa-pL7IreX9AGY-unsplash 11.png")`,
            width: 515,
            height : 497
          }}>
    <img className="ml-36 pt-36" src="/images/Group732.png" alt="play-btn" />
    </div>

    <div className="md:ml-10 ml-5">
    <div className="w-4/5 mt-14">
          <h1 className="text-5xl font-bold">Gather data to offer a bespoke solution</h1>
          <p className="text-xl font-normal mt-6 leading-relaxed">
          Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution
          </p>
          </div>
          <div className="flex space-x-2 md:mt-20 mt-7">
        <img className="" src="/images/Ellipse19.png" alt="girl-img" />
        <div className="mt-1">
            <h4 className="text-lg font-normal">Rachel Dawson</h4>
            <h4 className="text-sm font-thin">CEO, Globex Workspaces</h4>
        </div>
    </div>
    </div>
   
    </div>)
}

export default Section1;