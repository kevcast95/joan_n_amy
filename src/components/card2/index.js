import React, { Fragment } from "react";
import decoration1 from "../../assets/decoration1.png"
import insert_code from "../../assets/insert_code.png"


import "./Card2.css"

export default function CodeView({handleView}) {
 return ( 
  <Fragment>
   <div className="card2">
    <section className="box_code_decoration">
     <div className="input_btn_container">
      <span className ="code_input_container">
       <input type="number" />
      </span>
      <img src={insert_code} alt="insert_code" onClick={()=>handleView(3)}/>
     </div>
     <img src={decoration1} alt="decoration1" />
    </section>
   </div>
  </Fragment>
 )
}