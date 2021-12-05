import React, { Fragment, useState } from "react";
import { Questions } from "./questions";
import decoration2 from "../../assets/decoration2.png";
import correct from "../../assets/correct.jpeg";
import no_correct from "../../assets/not_correct.jpeg";
import next_q from "../../assets/next_q.png";



import "./Card3.css"

export default function QuestionView({handleView}) {
 const [question1, question2, question3] = Questions();
 const [questionSelected, setQuestionSelected] = useState(question1);
 const [answerSelected, setAnswerSelected] = useState(null);

 function tapAnswer(stage, opt) {
  if (stage.answer[0] === opt) {
   setAnswerSelected(true)
  }else {
   setAnswerSelected(false)
  }
  
 }
 function nextStage(stage) {
  setAnswerSelected(null);
  if (stage.pos >= 3) {
    handleView(4)
  }
  let newStage;
  if (stage.pos === 1) {
   newStage = question2;
  }
  if (stage.pos === 2 ) {
   newStage = question3;
  }
  setQuestionSelected(newStage);
 }
 
 const QuestionsElemt =(stage)=>{
  return(
   <Fragment >
     <section className="questions_container">
      <img src={decoration2} alt="decoration2" />
      <div className="text_container">
       <p>{stage.question}</p>
      </div>
     </section>
     <section className="answers_container">
     {
      stage.options.map((opt, index)=>{
       return (
        <div key={index} className="options_container" onClick={()=> tapAnswer(stage, index)}>
         <span>{index+1}</span>
         <p>{opt}</p>
        </div>
       )
      })
     }
     </section>
    </Fragment>
  )
 }

 const AnswerStatus =()=> {
  return(
   <section className="show_answer_contaier">
    <img src={answerSelected? correct: no_correct} alt="v" />
    <p>{questionSelected.answer[1]}</p>
   </section>
  )
 }
 
 return ( 
  <Fragment>
   <div className="card3">
   <div className="box_question_container">
    {answerSelected == null && questionSelected.pos <= 3 &&
     QuestionsElemt(questionSelected)
     }
    { answerSelected !== null &&
      AnswerStatus()
    }
    </div>
    { answerSelected !== null &&
      <img className="next_question" src={next_q} alt="next_q"  
      onClick={()=> nextStage(questionSelected)}
      />
    }
   </div>
  </Fragment>
 )
}