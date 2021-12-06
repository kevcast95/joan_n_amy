import React, { Fragment, useState } from "react";
import counter1 from "../../assets/counter1.png";
import counter2 from "../../assets/counter2.png";
import counter3 from "../../assets/counter3.png";
import next_counter from "../../assets/next_counter.png";


import "./Card6.css"

export default function InvitationView({handleView,user}) {

 const [counter, setCounter] = useState({
  day: 0,
  hour: 0,
  min: 0,
  sec: 0,
 });

 var pastDate = new Date(
  "Jan 6, 2022 16:00:00"
  /* `Jan 6, 2022 ${
    invitado[0].Modalidad === "PRESENCIAL" ? "16:00:00" : "16:30:00"
  }` */
).getTime();
 function pastTime() {
  var now = new Date().getTime();
  var gap = pastDate - now;
  var sec = 1000;
  var min = sec * 60;
  var hour = min * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor(gap % day) / hour;
  var m = Math.floor(gap % hour) / min;
  var s = Math.floor(gap % min) / sec;

  setCounter({
   day: Math.trunc(d),
   hour: Math.trunc(h),
   min: Math.trunc(m),
   sec: Math.trunc(s),
  });
 }

 setInterval(() => {
  pastTime();
 }, 1000);
 


 return ( 
  <Fragment>
   <div className="card6">
    <div className="invitation_view_container">
    <section className="counter_container">
     <div className="counter_circle_cintainer">
      <img src={counter2} className="circer_counter2" alt="counter2" />
      <span className="counter_text_container days">
       <p className="big_numbers">{counter.day}
       </p>
       <p className="time_text">
        Dias
       </p>
      </span>
     </div>
     <div className="counter_circle_cintainer">
      <img src={counter3} className="circer_counter3" alt="counter3" />
      <span className="counter_text_container minutes">
       <p className="big_numbers">
        {counter.min} 
       </p>
       <p className="time_text">
        Minutos
       </p>
      </span>
     </div>
     <div className="counter_circle_cintainer">
      <img src={counter1} className="circer_counter1" alt="counter1"/>
      <span className="counter_text_container hours">
       <p className="big_numbers">
        {counter.hour}
       </p>
       <p className="time_text">
        Horas
       </p>
      </span>
     </div>
     <div className="counter_circle_cintainer">
     <img src={counter2} className="circer_counter4" alt="counter4" /> 
     <span className="counter_text_container seconds">
      <p className="small_number">
       {counter.sec}
      </p>
      <p>
       Segs
      </p>
     </span>
     </div>
    </section>
    <section className="date_container">
      <p className="verse">
        "Es mejor ser dos que uno, porque ambos pueden ayudarse mutuamente a lograr el éxito" 
        <br/> 
        Ecl 4:9
      </p>
     <h1>06 Enero 2022 </h1>
     <p className="time_">4:30 PM</p>
     <p className="location_text">
       {user.mode === "Presencial"? 
        "Hotel Imagine Beach (Calle 6 No. 20-1149 Vía Sabanilla Pto. Colombia)."
        :
        "Queremos que te unas a nuestra transmisión en vivo"
       }
        
      </p>
    </section>
    <section className="next_container">
     <div onClick={()=>handleView(7)}>
      <p>Siguiente</p>
      <img src={next_counter} alt="next_counter" className="next_counter_btn" />
     </div>
    </section>
    </div>
   </div>
  </Fragment>
 )
}