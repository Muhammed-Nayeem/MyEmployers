//All The Imported Materials:
import React from 'react';
import "./Banner.css";


//Banner Component:
const Banner = () => {
  return (
   <section className="banner-area">
     <div className="container">
       <div className="banner-content">
         <h1>my employers</h1>
         <p>a trusted platform to get the best tech leaders to growing your company</p>
         <button className="btn btn1">hire</button>
         <button className="btn btn2">resume</button>
       </div>
     </div>
   </section>
  );
};

export default Banner;