import React from "react";

export  function Team() {
  return (
    <div>

      <h3 className="text-center mt-5">People</h3>

      <div className="justify-content-evenly d-flex container flex-wrap mt-5 ">
        <div className="text-center">
          <img
            className="rounded-circle img-fluid"
            src="media/images/nithinkamath.jpg"
            alt="about"
            width="300"
            height="300"
            srcSet=""
          />
          <p className="mt-4 fs-4">Nithin Kamath</p>
          <p>Founder, CEO</p>
        </div>
        <div>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            <br /> hurdles he faced during his decade long stint as a trader.
            Today,
            <br />
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            He was named one of the “Top 10 Businessmen to Watch Out for in
            <br /> 2016 in India” by The Economic Times for pioneering and
            scaling <br />
            discount broking in India.
          </p>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            Playing basketball is his zen.
          </p>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            Connect on{" "}
            <span>
              <a id="links" href="https://nithinkamath.me/" style={{textDecoration:"none"}}>
                HomePage / TradingQnA / Twitter
              </a>
            </span>
          </p>
        </div>
      </div>

     

      
      </div>
   
  );
}
