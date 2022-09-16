import React from "react";
import "./routes.css"
import { Link } from "react-router-dom";

const Home =()=>{
    return <div class="center-Text">
        <h1>
        Jan Emanuel "Så var det med det, Tjena Tjena!"
        </h1>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">About</Link>
      </nav>
    </div>
}

export default Home