import React from "react";
import Section3 from "./Section3";

const data = [
    {
        title : "Boost adoption of product and services",
        paragraph : "Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution ",
        buttonText : "Lets Get Started",
        image1 : "/images/sales.png",
        image2 : "/images/Group658.png",
        classImage : "float-right",
        classContent : "float-left"
     },
    {
        title : "Stay up to date with how you’re performing",
        paragraph : "Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution",
        buttonText : "Lets Get Started",
        image1 : "/images/Group689.png",
        image2 : "/images/peter-olexa-pL7IreX9AGY.png",
        classImage : "float-left",
        classContent : "float-right md:mt-28 mt-48"
     },
     {
        title : "Easily manage sales through our invoicing system",
        paragraph : "Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution",
        buttonText : "Lets Get Started",
        image1 : "/images/Group65.png",
        image2 : "/images/peter-olexa-pL7IreX9AGY123.png",
        classImage : "float-right md:mt-40 mb-96 md:mb-0",
        classContent : "float-left md:mt-52 md:mb-56 mt-60 "
     },
    ]

const Section3Man = () => {
    return(
        <div>
        <Section3 data={data}/>
        </div>
    )
}

export default Section3Man;