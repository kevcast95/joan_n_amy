import React, { Fragment, useState } from "react";
import decoration1 from "../../assets/decoration1.png"
import insert_code from "../../assets/insert_code.png"


import "./Card2.css"

export default function CodeView({handleView, guests,selectUSer}) {
    const [code, setCode] = useState(null)
 
 function filterUser(){
     let guest = guests.filter(gst => gst.code === code);
     if(guest[0]!==undefined){
        selectUSer(guest[0])
     }else {
        alert("Código incorrecto, intente de nuevo")
        return
    }
    handleView(8)
 }   

 return ( 
  <Fragment>
   <div className="card2">
    <section className="box_code_decoration">
     <div className="input_btn_container">
      <span className ="code_input_container">
       <input type="number" placeholder="Inserte código aquí" onChange={(e)=>setCode(e.target.value)}/>
      </span>
      <img src={insert_code} alt="insert_code" onClick={()=>filterUser()}/>
     </div>
     <img src={decoration1} alt="decoration1" />
    </section>
   </div>
  </Fragment>
 )
}