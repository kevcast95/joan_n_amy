import React, { Fragment } from "react";
import couple_names from "../../assets/main_amy_joan.png"
import next_q from "../../assets/next_q.png";

import "./Card1.css"

export default function Presentation({handleView}) {
 return ( 
  <Fragment>
   <div className="card1">
    <div className="couple_names-container">
     <img src={couple_names} alt="couple_names" />
    </div>
    <img className="next_view" src={next_q} alt="next_view" onClick={()=>handleView(2)}/>
   </div>
  </Fragment>
 )
}