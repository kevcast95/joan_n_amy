import React, { Fragment } from "react";
import parents_a_j from "../../assets/parents_a_j.png"
import next_q from "../../assets/next_q.png";
import decoration3 from "../../assets/decoration3.png"


export default function PreQuestions({handleView}) {
 return ( 
  <Fragment>
   <div className="card4">
    <div className="parents_names_container">
     <h3 className="parents_name"></h3>
     <p></p>
     <h3 className="parents_name" style={{textAlign:"center"}}>¿Qué tanto nos conocen?</h3>
     <p></p>
     <img className="next_question" src={next_q} alt="next_q"  onClick={()=>handleView(3)}/>
    </div>
   </div>
  </Fragment>
 )
}