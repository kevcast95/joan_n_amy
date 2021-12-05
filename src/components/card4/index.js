import React, { Fragment } from "react";
import parents_a_j from "../../assets/parents_a_j.png"
import next_q from "../../assets/next_q.png";
import decoration3 from "../../assets/decoration3.png"

import "./Card4.css"

export default function ParentsView({handleView}) {
 return ( 
  <Fragment>
   <div className="card4">
    <div className="parents_names_container">
     <h3 className="parents_name">José Forero y Ana Isabel Mejía</h3>
     <p>&</p>
     <h3 className="parents_name">Goldwing Ahumada y Mónica Sierra</h3>
     <p>Los invitan a la boda de</p>
     <img src={parents_a_j} alt="parents_a_j" className="parents_a_j" />
     <img className="next_question" src={next_q} alt="next_q"  onClick={()=>handleView(5)}/>
     <img className="decoration3" src={decoration3} alt="decoration3"  />
    </div>
   </div>
  </Fragment>
 )
}