import React, { Fragment, useState } from "react";
import qr from "../../assets/qr.png";
import pse from "../../assets/icon_pse.png";
import close_btn from "../../assets/close_btn.png";
import "./Card7.css"

export default function DressCode({selectInteraction}) {


 return ( 
  <Fragment>
   <div className="card7">
    <div className="qr_code_container" style={{backgroundColor:"#983434"}}>
     <section className="qr_container">
      <div>
        <img src={qr} alt="qr"/>
        <p>Qr Nequi</p>
      </div>
      <p>Número de cuenta</p>
      <p>3012786255</p>
     </section>
     <section className="pse_close_btn">
        <a href="https://recarga.nequi.com.co/bdigitalpsl/#!/" target="_blank" className="link">
            <p>Link pse</p>
            <img src={pse} alt="pse" className="pse_btn" />
        </a>
        <img src={close_btn} alt="close" onClick={()=> selectInteraction(null)} />
     </section>
    </div>
   </div>
  </Fragment>
 )
}