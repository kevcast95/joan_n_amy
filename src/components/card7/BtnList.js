import React, { Fragment } from "react";
import icon_dress_code from "../../assets/icon_dress_code.png";
import icon_location from "../../assets/icon_location.png";
import icon_qr from "../../assets/icon_qr.png";
import icon_live from "../../assets/icon_live.png";
import interaction_aj from "../../assets/interaction_aj.png";

export default function BtnList({mode, selectInteraction}) {

 const btnsPresent = [
  {
   icon: icon_dress_code,
   Text: "Dress Code",
   select: ()=> selectInteraction("dress")
  },
  {
   icon: icon_location,
   Text: "Ubicacion",
   select: ()=> selectInteraction("location")
  },
  {
   icon: icon_qr,
   Text: "Lluvia de sobres",
   select: ()=> selectInteraction("gift")
  }
 ]

 const btnsVirtual = [
  {
   icon: icon_live,
   Text: "Link de la transmision",
   select: ()=> selectInteraction("live")
  },
  {
   icon: icon_qr,
   Text: "Lluvia de sobres",
   select: ()=> selectInteraction("gift")
  }
 ]
 
 let btnList = mode === "virtual"? btnsVirtual:btnsPresent;

 return(
  <Fragment>
    <div className="btn_list_container">
     {
      btnList.map((item,index)=>{
       return(
        <div key={index} className="interactions_container" onClick={()=> item.select()} >
         <img src={item.icon} alt="icons" className="icons_int"/>
         <p>{item.Text}</p>
        </div>
       )
      })
     }
    </div>
    {mode === "presencial" &&
      <div className="confirm_btn">
       Confirmar asistencia
      </div>
    }
    <img src={interaction_aj} alt="interaction_aj"  className="interaction_aj"/>
  </Fragment>
 )
}