import React, { Fragment, useState } from "react";
import icon_dress_code from "../../assets/icon_dress_code.png"
import icon_location from "../../assets/icon_location.png"
import icon_qr from "../../assets/icon_qr.png"
import icon_live from "../../assets/icon_live.png"
import interaction_aj from "../../assets/interaction_aj.png"



import "./Card7.css"

export default function InteractionView() {

 const btnsPresent = [
  {
   icon: icon_dress_code,
   Text: "Dress Code"
  },
  {
   icon: icon_location,
   Text: "Ubicacion"
  },
  {
   icon: icon_qr,
   Text: "Donaciones"
  }
 ]

 const btnsVirtual = [
  {
   icon: icon_live,
   Text: "Link de la transmision"
  },
  {
   icon: icon_qr,
   Text: "Donaciones"
  }
 ]

 const InteractionBtn =()=> {
  return(
   <Fragment>
     <div className="btn_list_container">
      {
       btnsPresent.map((item,index)=>{
        return(
         <div key={index} className="interactions_container" /* onClick={()=> tapAnswer(stage, index)} */>
          <img src={item.icon} alt="icons" className="icons_int"/>
          <p>{item.Text}</p>
         </div>
        )
       })
      }
     </div>
     <div className="confirm_btn">
      Confirmar asistencia
     </div>
     <img src={interaction_aj} alt="interaction_aj"  className="interaction_aj"/>
   </Fragment>
  )
 }

 return ( 
  <Fragment>
   <div className="card7">
    <div className="interaction_view_container">
    {InteractionBtn()}
    </div>
   </div>
  </Fragment>
 )
}