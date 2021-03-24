
import React from "react";
import { Link } from "react-router-dom";
import bg from "../images/bookStore.jpg";
import "./Home.css";
const EnterPage = () => {
   const bgc = {
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroudnPosition: "top",
      backgroundRepeat: "no-repeat"
   };
   return (
      <div style={bgc} className="enterPage">
         <div className="nav-page">
            <h1>Welcome to</h1>
            <h1>old town</h1>
            <Link to="/books">
               <button className="welcome-btn">Start read</button>
            </Link>
         </div>
      </div>
   );
};
export default EnterPage;
