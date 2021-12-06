import React, { Fragment } from "react";
import icon_dress_code from "../../assets/icon_dress_code.png";
import icon_location from "../../assets/icon_location.png";
import icon_qr from "../../assets/icon_qr.png";
import icon_live from "../../assets/icon_live.png";
import interaction_aj from "../../assets/interaction_aj.png";

export default function BtnList({mode, selectInteraction,handleView}) {

 const btnsPresent = [
  {
   icon: icon_dress_code,
   Text: "Dress Code",
   select: ()=> selectInteraction("dress")
  },
  {
   icon: icon_location,
   Text: "Ubicación",
   select: ()=> selectInteraction("location")
  },
  {
   icon: icon_qr,
   Text: "Lluvia de tranferencias",
   select: ()=> selectInteraction("gift")
  }
 ]

 const btnsVirtual = [
  {
   icon: icon_live,
   Text: "Link de la transmisión",
   select: ()=>  alert("Aun no disponible")/* selectInteraction("live") */
  },
  {
   icon: icon_qr,
   Text: "Lluvia de tranferencias",
   select: ()=> selectInteraction("gift")
  }
 ]
 
 let btnList = mode === "Virtual"? btnsVirtual:btnsPresent;

 return(
  <Fragment>
    <div className="btn_list_container">
     {
      btnList.map((item,index)=>{
        if (mode === "Presencial" && index === 1) {
          return(
            <a key={index} className="interactions_container" href="https://maps.app.goo.gl/4UYDFaKT82Jacm3a7" target="_blank" >
             <img src={item.icon} alt="icons" className="icons_int"/>
             <p>{item.Text}</p>
            </a>
           )
        }else{
          return(
            <div key={index} className="interactions_container" onClick={()=> item.select()} >
             <img src={item.icon} alt="icons" className="icons_int"/>
             <p>{item.Text}</p>
            </div>
          )
        }
       
      })
     }
    </div>
    {mode === "Presencial" &&
      <div className="confirm_btn">
       No olvides confirmar asistencia
      </div>
    }
    <div className="home_btn" onClick={()=>handleView(1)}>
      Inicio
    </div>
    <img src={interaction_aj} alt="interaction_aj"  className="interaction_aj"/>

  </Fragment>
 )
}