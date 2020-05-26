import React from "react";
import "../styles/hobbies.scss";
import Hiking from "../Pics/Hiking.jpg";

function Hobbies() {
  return (
    <div className="hobbies">
      <p className='section-header'>-This is how I relax-</p>
      <p className='hobby-description'> Relaxing and unwinding is so important to me.  I love to play videogames, backpack, read, golf, and watch movies.</p>
      <section className='photos'>
        <section className="pic-container">
          <div className="small-container">
            <img
              className="hobby-pic"
              src="https://www.washingtonpost.com/resizer/nFuI1ZfKghAD3fLa0beb1-HbfP4=/arc-anglerfish-washpost-prod-washpost/public/2NI3ACSRWBHFVDDHRDKDQDVMEA.jpg"
              alt="video game controllers"
            />
          </div>
          <div className="small-container">
            <img className="hobby-pic" src={Hiking} alt="backpacking" />
          </div>
          <div className="small-container">
            <img
              className="hobby-pic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtGY8fBMXFY41QrOkRMfbbCGpsfcy1kJmCGAVJZcCGqLg8gYWT&usqp=CAU"
              alt="open book"
            />
          </div>
        </section>
        <section className="pic-container">
          <div className="small-container">
            <img
              className="hobby-pic"
              src="https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/2402/files/2017/07/club-house-1262x690.jpg"
              alt="golfing"
            />
          </div>
          <div className="small-container">
            <img className='hobby-pic' src='https://hometheaterreview.com/Abt%20Home%20Theater.jpg
            ' alt='home theater'/>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Hobbies;
