import React from "react";

export  function Team() {
  return (
    <div>

      <h3 className="text-center mt-5">People</h3>

      <div className="justify-content-evenly d-flex container flex-wrap mt-5 ">
        <div className="text-center">
          <img
            className="rounded-circle img-fluid"
            src="media/images/1234.jpg"
            alt="about"
            width="300"
            height="300"
            srcSet=""
          />
          <p className="mt-4 fs-4">Shivraj Darekar</p>
          <p>Founder, CEO</p>
        </div>
        <div>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
          Shivraj Darekar is a skilled web developer and a student at VIIT,
           where  <br /> he actively engages in various development projects. 
            <br />
            He specializes in the MERN stack and has strong expertise in frontend 
            <br/> technologies like HTML5, CSS, Bootstrap, JavaScript, and React.
          </p>

          <p style={{ fontSize: "17px", marginTop: "30px" }}>
          He demonstrates leadership through his involvement in project development 
            <br /> and team collaborations, showcasing his ability to guide peers in achieving 
            <br />
            common goals.
          </p>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
          Shivraj has a solid foundation in Data Structures and Algorithms (DSA)
          </p>
          <p style={{ fontSize: "17px", marginTop: "30px" }}>
            Connect on{" "}
            <span>
            <a id="links" href="https://in.linkedin.com/in/shivrajdarekar" style={{textDecoration:"none"}}>
            LinkedIn
             </a>
            </span>
          </p>
        </div>
      </div>

     

      
      </div>
   
  );
}
