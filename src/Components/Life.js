import React from "react";
import "../styles/life.scss";

function Life() {
  return (
    <div className="life-section">
      <h2 className="section-header">-This is the way I live my life-</h2>
      <section>
        <a
          className="line"
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://money.usnews.com/money/blogs/outside-voices-careers/2011/03/03/how-loving-your-job-helps-you-succeed"
          }
        >
          Love your job, because you will spend most of your time doing it.
        </a>
        <p className="line">
          Two attributes that best describe me and the way I do life and
          business are:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://www.inc.com/peter-economy/15-surprising-things-i-have-learned-about-loyalty.html"
            }
          >
            Loyalty
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.psychologytoday.com/us/basics/productivity"}
          >
            Productivity
          </a>
        </p>
      </section>
    </div>
  );
}

export default Life;
