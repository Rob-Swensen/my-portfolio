import React from "react";
import "../styles/history.scss";

function History() {
  return (
    <div className="history-section">
      <h1 className="section-header"> - From There to Here - </h1>
      <section className="details">
        <div className="image-container">
          <img
            src="https://d.newsweek.com/en/full/1533980/devmountain-logo-lockup-blue.png"
            alt="dev mountain"
          />
        </div>
        <section className="history-text">
          <h2>DevMountain Web Development Graduate</h2>
          <h3>Web Developer Student from February - May 2020</h3>
          <p>
            Learned HTML, CSS, Javascript, React.js, Node.js, Github, Express,
            and more through a 13 week rigorous course.
          </p>
          <p>
            Completed a personal project designing an e-commerce website for a
            dog bandana company to help them expand their online presence beyond
            Amazon.com. Project included technologies such as React.js, Redux,
            React Hooks, Sass, Stripe, Nodemailer, and Amazon S3.
          </p>
          <p>
            Helped lead a group project called Movie Machine which made dozens
            of API calls to an online movie database to display movie
            information for tens of thousands of movies. Users have the ability
            to create an account and add movies to a stored movie watch list.
          </p>
        </section>
      </section>
      <section className="details">
        <div className="image-container">
          <img
            src="https://www.improvediagnosis.org/wp-content/uploads/2019/11/intermountain-transparent.png"
            alt="dev mountain"
          />
        </div>
        <section className="history-text">
          <h2>Intermountain Healthcare</h2>
          <h3>Intensive Care Registered Nurse from April 2016 - Present</h3>
          <p>
            5 years working in Cardiovascular and Thoracic Intensive Care Units.
            Experience with open heart and heart transplant patients and
            life-saving equipment such as Continuous Renal Replacement Therapy
            (CRRT), Intra-aortic Balloon Pump (IABP), Empella, Left and Right
            Ventricular Assist Devices, and Extracorporeal Membrane Oxygenation
            (ECMO).
          </p>
          <p>
            2 years leadership experience training and supervising floor nurses
            and running hospital-wide code-blue emergency situations.
          </p>
        </section>
      </section>
      <section className="details">
        <section className="history-text">
          <h2>Utah Valley University</h2>
          <h3>Bachelor's Degree in Nursing from September 2010 - May 2016</h3>
          <p>
            5 years working in Cardiovascular and Thoracic Intensive Care Units.
            Experience with open heart and heart transplant patients and
            life-saving equipment such as Continuous Renal Replacement Therapy
            (CRRT), Intra-aortic Balloon Pump (IABP), Empella, Left and Right
            Ventricular Assist Devices, and Extracorporeal Membrane Oxygenation
            (ECMO).
          </p>
          <p>
            2 years leadership experience training and supervising floor nurses
            and running hospital-wide code-blue emergency situations.
          </p>
        </section>
      </section>
    </div>
  );
}

export default History;