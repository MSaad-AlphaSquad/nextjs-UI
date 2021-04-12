import React from "react";

const Section3 = ({data}) => {
      return (
        <div className="static md:mx-20 mx-32">
        {data.map((items) => {
          return(
            <React.Fragment key={items.title}>
                <div className="">
      <div className={`md:w-1/2 w-96 ${items.classContent} md:py-40 py-5 `}>
        <h1 className="text-5xl font-semibold">{items.title}</h1>
        <p className="my-8 text-xl">
         {items.paragraph}
        </p>
        <button className="text-sm text-pink-500 font-bold"><span className="text-base underline"> {items.buttonText}</span>  ᐳ </button>
      </div>
      <div className={` ${items.classImage}` }>
      <div className="relative">
          <img src={items.image2} alt="girl-img"/> 
          <div className="absolute top-96 left-7">
          <img src={items.image1} alt="saled-img" width='350'/>
        </div>
        </div>   
      </div>
</div>
</React.Fragment>

   
    )
    })}
    </div>
  )

};

export default Section3;
