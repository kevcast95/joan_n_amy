import React, { Fragment, useState } from "react";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import close_btn from "../../assets/close_btn.png";
import "./Card7.css"

export default function DressCode({selectInteraction}) {

 const [gender, setGender] = useState(0);

 return ( 
  <Fragment>
    <div className={`${gender ===0? "male":"female"} dress_code_container`}>
     <section className="select_gender">
      <img src={male} alt="male" onClick={()=> setGender(0)}/>
      <img src={female} alt="female" onClick={()=> setGender(1)}/>
     </section>
     <section className="dress_description">
      <img src={close_btn} alt="close_btn" onClick={()=> selectInteraction(null)}/>
      <p>
       {gender === 0 ?
         "Camisa blanca, pantalon beige."
         :
         "Playa formal (vestidos largos, lisos, preferiblemente colores pasteles)"
       }
      </p>
     </section>
    </div>
  </Fragment>
 )
}