export function Questions () {
 const question1 = {
  pos:1,
  question: "¿En dónde se conocieron Amy y Joan?",
  options: [ "Un bar","La Iglesia","La Universidad",],
  answer: [1, "Opción 2: Se Conocieron en el 2012"],
 }

 const question2 = {
  pos:2,
  question: "¿A qué país les gustaría migrar?",
  options: ["Alemania","Canadá","Estados Unidos",],
  answer:[0,"Opción 1: Los dos quieren estudiar allá"],
 }

 const question3 = {
  pos:3,
  question: "¿En dónde fue la propuesta de matrimonio?",
  options:["Un Restaurante","La playa","El río",],
  answer: [2,"Opción 3: Joan le propuso matrimonio en un paseo en el río Magdalena"],
 }
 return [question1, question2, question3]
}