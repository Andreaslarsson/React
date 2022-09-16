import React from "react";
import { Link } from "react-router-dom";

const About =()=>{
    return <div class="center-Text">
        <h1>  This is just a diffent page  </h1>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">back to home </Link>
      </nav>
    </div>
}

export default About