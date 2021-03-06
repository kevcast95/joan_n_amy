import React, { Fragment, useState, useRef  } from "react";
import play_video from "../../assets/play_video.png";
import decoration4 from "../../assets/decoration4.png";
import video from "../../assets/video.mp4";
import close_btn from "../../assets/close_btn.png";
import next_counter from "../../assets/next_q.png"


import "./Card5.css"

export default function VideoView({handleView, user}) {
  console.log(user.code);
 const [openModal, setOpenModal] = useState(false);
 const vidRef = useRef(null)
 const modalVideo =()=> {
  return(
   <div className="modal_video_container">
    <img src={close_btn} alt="close_btn" onClick={()=>setOpenModal(false)}/>
    <div className="video_container">
     <video  width="350" height="500px" ref={vidRef} controls autoPlay>
     <source src={video} type="video/mp4" />
     </video>
    </div>
   </div>
  )
 }

 return ( 
  <Fragment>
   <div className="card5">
    <div className="video_view_container">
     <section className="invited_contaner">
      <h3>{user.name}</h3>
      <span>
       {user.mode === "Presencial" && <p>Cupos</p>  }
       {user.mode === "Presencial" && <p className="quotas">{user.quota}</p> }
      </span>
     </section>
     <section className="video_invitation_container">
      <div className="play_video_container">
        <img src={play_video} alt="play_video" onClick={()=>setOpenModal(true)} />
      </div>
      <div className="see_invitation" onClick={()=>handleView(6)}>
        <p>Siguiente</p>
        <img src={next_counter} alt="next_counter" className="see_invitation_btn" />
      </div>
     </section>
     <img src={decoration4} alt="decoration1" />
    </div>
    {openModal && 
      modalVideo()
    }
   </div>
  </Fragment>
 )
}