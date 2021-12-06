import React, { Fragment, useState } from "react";
import BtnList from "./BtnList";
import DressCode from "./DressCode";
import Gift from "./Gift"

import "./Card7.css"

export default function InteractionView({user,handleView}) {
  const [bntClicked, setBtnClicked] = useState(null);

  function selectInteraction(interaction) {
    console.log("recibiendo,", interaction);
    setBtnClicked(interaction);
  }


 return ( 
  <Fragment>
   <div className="card7">
    <div className="interaction_view_container">
      {bntClicked === null &&
        <BtnList 
          mode={user.mode}
          selectInteraction={(interaction)=>selectInteraction(interaction)} 
          handleView={handleView}
        />
      }
      {bntClicked === "dress" &&
        <DressCode
          selectInteraction={(interaction)=>selectInteraction(interaction)} 
        />
      }
      {bntClicked === "gift" &&
        <Gift
          selectInteraction={(interaction)=>selectInteraction(interaction)} 
        />
      }
    </div>
   </div>
  </Fragment>
 )
}