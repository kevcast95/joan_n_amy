import React, { Fragment, useState } from "react";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import close_btn from "../../assets/close_btn.png";
import "./Card7.css"

export default function DressCode({selectInteraction}) {


 return ( 
  <Fragment>
   <div className="card7">
    <div className="dress_code_contaioner" style={{backgroundColor:"#983434"}}>
     <section className="qr_container">
      
     </section>
     <section className="pse_close_btn">

     </section>
    </div>
   </div>
  </Fragment>
 )
}