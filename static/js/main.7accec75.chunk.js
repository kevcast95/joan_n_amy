(this.webpackJsonpj_a_wedding=this.webpackJsonpj_a_wedding||[]).push([[0],[,,,,function(e,a,n){},,,,,,function(e,a,n){},function(e,a,n){},,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),i=n(5),o=n.n(i),s=(n(10),n(2)),r=n.p+"static/media/main_amy_joan.295893a6.png",d=n.p+"static/media/next_q.3fe003ba.png",l=(n(11),n(0));function m(e){var a=e.handleView;return Object(l.jsx)(t.Fragment,{children:Object(l.jsxs)("div",{className:"card1",children:[Object(l.jsx)("div",{className:"couple_names-container",children:Object(l.jsx)("img",{src:r,alt:"couple_names"})}),Object(l.jsx)("img",{className:"next_view",src:d,alt:"next_view",onClick:function(){return a(2)}})]})})}var u=n.p+"static/media/decoration1.c3da1288.png",j=n.p+"static/media/insert_code.c2d28694.png";n(13);function b(e){var a=e.handleView,n=e.guests,c=e.selectUSer,i=Object(t.useState)(null),o=Object(s.a)(i,2),r=o[0],d=o[1];return Object(l.jsx)(t.Fragment,{children:Object(l.jsx)("div",{className:"card2",children:Object(l.jsxs)("section",{className:"box_code_decoration",children:[Object(l.jsxs)("div",{className:"input_btn_container",children:[Object(l.jsx)("span",{className:"code_input_container",children:Object(l.jsx)("input",{type:"number",placeholder:"Inserte c\xf3digo aqu\xed",onChange:function(e){return d(e.target.value)}})}),Object(l.jsx)("img",{src:j,alt:"insert_code",onClick:function(){return function(){var e=n.filter((function(e){return e.code===r}));void 0!==e[0]?(c(e[0]),a(8)):alert("C\xf3digo incorrecto, intente de nuevo")}()}})]}),Object(l.jsx)("img",{src:u,alt:"decoration1"})]})})})}var x=n.p+"static/media/decoration2.788f00ea.png",O=n.p+"static/media/correct.8e6b8001.jpeg",v=n.p+"static/media/not_correct.162df969.jpeg";n(14);function h(e){var a=e.handleView,n=[{pos:1,question:"\xbfEn d\xf3nde se conocieron Amy y Joan?",options:["Un bar","La Iglesia","La Universidad"],answer:[1,"Opci\xf3n 2: Se Conocieron en el 2012"]},{pos:2,question:"\xbfA qu\xe9 pa\xeds les gustar\xeda migrar?",options:["Alemania","Canad\xe1","Estados Unidos"],answer:[0,"Opci\xf3n 1: Los dos quieren estudiar all\xe1"]},{pos:3,question:"\xbfEn d\xf3nde fue la propuesta de matrimonio?",options:["Un Restaurante","La playa","El r\xedo"],answer:[2,"Opci\xf3n 3: Joan le propuso matrimonio en un paseo en el r\xedo Magdalena"]}],c=Object(s.a)(n,3),i=c[0],o=c[1],r=c[2],m=Object(t.useState)(i),u=Object(s.a)(m,2),j=u[0],b=u[1],h=Object(t.useState)(null),p=Object(s.a)(h,2),_=p[0],g=p[1];var f;return Object(l.jsx)(t.Fragment,{children:Object(l.jsxs)("div",{className:"card3",children:[Object(l.jsxs)("div",{className:"box_question_container",children:[null==_&&j.pos<=3&&(f=j,Object(l.jsxs)(t.Fragment,{children:[Object(l.jsxs)("section",{className:"questions_container",children:[Object(l.jsx)("img",{src:x,alt:"decoration2"}),Object(l.jsx)("div",{className:"text_container",children:Object(l.jsx)("p",{children:f.question})})]}),Object(l.jsx)("section",{className:"answers_container",children:f.options.map((function(e,a){return Object(l.jsxs)("div",{className:"options_container",onClick:function(){return function(e,a){e.answer[0]===a?g(!0):g(!1)}(f,a)},children:[Object(l.jsx)("span",{children:a+1}),Object(l.jsx)("p",{children:e})]},a)}))})]})),null!==_&&Object(l.jsxs)("section",{className:"show_answer_contaier",children:[Object(l.jsx)("img",{src:_?O:v,alt:"v"}),Object(l.jsx)("p",{children:j.answer[1]})]})]}),null!==_&&Object(l.jsx)("img",{className:"next_question",src:d,alt:"next_q",onClick:function(){return function(e){var n;g(null),e.pos>=3&&a(4),1===e.pos&&(n=o),2===e.pos&&(n=r),b(n)}(j)}})]})})}var p=n.p+"static/media/parents_a_j.690c46b5.png",_=n.p+"static/media/decoration3.0f65dfdc.png";n(15);function g(e){var a=e.handleView;return Object(l.jsx)(t.Fragment,{children:Object(l.jsx)("div",{className:"card4",children:Object(l.jsxs)("div",{className:"parents_names_container",children:[Object(l.jsx)("h3",{className:"parents_name",children:"Jos\xe9 Forero y Ana Isabel Mej\xeda"}),Object(l.jsx)("p",{children:"&"}),Object(l.jsx)("h3",{className:"parents_name",children:"Goldwing Ahumada y M\xf3nica Sierra"}),Object(l.jsx)("p",{children:"Los invitan a la boda de"}),Object(l.jsx)("img",{src:p,alt:"parents_a_j",className:"parents_a_j"}),Object(l.jsx)("img",{className:"next_question",src:d,alt:"next_q",onClick:function(){return a(9)}}),Object(l.jsx)("img",{className:"decoration3",src:_,alt:"decoration3"})]})})})}var f=n.p+"static/media/play_video.cb666d1a.png",q=n.p+"static/media/decoration4.c2cc126a.png",N=n.p+"static/media/video.4320821e.mp4",I=n.p+"static/media/close_btn.57414358.png";n(16);function P(e){var a=e.handleView,n=e.user;console.log(n.code);var c=Object(t.useState)(!1),i=Object(s.a)(c,2),o=i[0],r=i[1],m=Object(t.useRef)(null);return Object(l.jsx)(t.Fragment,{children:Object(l.jsxs)("div",{className:"card5",children:[Object(l.jsxs)("div",{className:"video_view_container",children:[Object(l.jsxs)("section",{className:"invited_contaner",children:[Object(l.jsx)("h3",{children:n.name}),Object(l.jsxs)("span",{children:["Presencial"===n.mode&&Object(l.jsx)("p",{children:"Cupos"}),"Presencial"===n.mode&&Object(l.jsx)("p",{className:"quotas",children:n.quota})]})]}),Object(l.jsxs)("section",{className:"video_invitation_container",children:[Object(l.jsx)("div",{className:"play_video_container",children:Object(l.jsx)("img",{src:f,alt:"play_video",onClick:function(){return r(!0)}})}),Object(l.jsxs)("div",{className:"see_invitation",onClick:function(){return a(6)},children:[Object(l.jsx)("p",{children:"Siguiente"}),Object(l.jsx)("img",{src:d,alt:"next_counter",className:"see_invitation_btn"})]})]}),Object(l.jsx)("img",{src:q,alt:"decoration1"})]}),o&&Object(l.jsxs)("div",{className:"modal_video_container",children:[Object(l.jsx)("img",{src:I,alt:"close_btn",onClick:function(){return r(!1)}}),Object(l.jsx)("div",{className:"video_container",children:Object(l.jsx)("video",{width:"350",height:"500px",ref:m,controls:!0,autoPlay:!0,children:Object(l.jsx)("source",{src:N,type:"video/mp4"})})})]})]})})}var C=n.p+"static/media/counter1.aa61d262.png",y=n.p+"static/media/counter2.0ef71065.png",V=n.p+"static/media/counter3.5c5782f0.png",A=n.p+"static/media/next_counter.70296c26.png";n(17);function J(e){var a=e.handleView,n=e.user,c=Object(t.useState)({day:0,hour:0,min:0,sec:0}),i=Object(s.a)(c,2),o=i[0],r=i[1],d=new Date("Jan 6, 2022 16:00:00").getTime();return setInterval((function(){!function(){var e=(new Date).getTime(),a=d-e,n=6e4,t=60*n,c=24*t,i=Math.floor(a/c),o=Math.floor(a%c)/t,s=Math.floor(a%t)/n,l=Math.floor(a%n)/1e3;r({day:Math.trunc(i),hour:Math.trunc(o),min:Math.trunc(s),sec:Math.trunc(l)})}()}),1e3),Object(l.jsx)(t.Fragment,{children:Object(l.jsx)("div",{className:"card6",children:Object(l.jsxs)("div",{className:"invitation_view_container",children:[Object(l.jsxs)("section",{className:"counter_container",children:[Object(l.jsxs)("div",{className:"counter_circle_cintainer",children:[Object(l.jsx)("img",{src:y,className:"circer_counter2",alt:"counter2"}),Object(l.jsxs)("span",{className:"counter_text_container days",children:[Object(l.jsx)("p",{className:"big_numbers",children:o.day}),Object(l.jsx)("p",{className:"time_text",children:"Dias"})]})]}),Object(l.jsxs)("div",{className:"counter_circle_cintainer",children:[Object(l.jsx)("img",{src:V,className:"circer_counter3",alt:"counter3"}),Object(l.jsxs)("span",{className:"counter_text_container minutes",children:[Object(l.jsx)("p",{className:"big_numbers",children:o.min}),Object(l.jsx)("p",{className:"time_text",children:"Minutos"})]})]}),Object(l.jsxs)("div",{className:"counter_circle_cintainer",children:[Object(l.jsx)("img",{src:C,className:"circer_counter1",alt:"counter1"}),Object(l.jsxs)("span",{className:"counter_text_container hours",children:[Object(l.jsx)("p",{className:"big_numbers",children:o.hour}),Object(l.jsx)("p",{className:"time_text",children:"Horas"})]})]}),Object(l.jsxs)("div",{className:"counter_circle_cintainer",children:[Object(l.jsx)("img",{src:y,className:"circer_counter4",alt:"counter4"}),Object(l.jsxs)("span",{className:"counter_text_container seconds",children:[Object(l.jsx)("p",{className:"small_number",children:o.sec}),Object(l.jsx)("p",{children:"Segs"})]})]})]}),Object(l.jsxs)("section",{className:"date_container",children:[Object(l.jsxs)("p",{className:"verse",children:['"Es mejor ser dos que uno, porque ambos pueden ayudarse mutuamente a lograr el \xe9xito"',Object(l.jsx)("br",{}),"Ecl 4:9"]}),Object(l.jsx)("h1",{children:"06 Enero 2022 "}),Object(l.jsx)("p",{className:"time_",children:"4:30 PM"}),Object(l.jsx)("p",{className:"location_text",children:"Presencial"===n.mode?"Hotel Imagine Beach (Calle 6 No. 20-1149 V\xeda Sabanilla Pto. Colombia).":"Queremos que te unas a nuestra transmisi\xf3n en vivo"})]}),Object(l.jsx)("section",{className:"next_container",children:Object(l.jsxs)("div",{onClick:function(){return a(7)},children:[Object(l.jsx)("p",{children:"Siguiente"}),Object(l.jsx)("img",{src:A,alt:"next_counter",className:"next_counter_btn"})]})})]})})})}var F=n.p+"static/media/icon_dress_code.09136a9d.png",w=n.p+"static/media/icon_location.89cf6a83.png",M=n.p+"static/media/icon_qr.3cac4362.png",S=n.p+"static/media/icon_live.15341232.png",k=n.p+"static/media/interaction_aj.b4a2ff13.png";function E(e){var a=e.mode,n=e.selectInteraction,c=e.handleView,i="Virtual"===a?[{icon:S,Text:"Link de la transmisi\xf3n",select:function(){return alert("Aun no disponible")}},{icon:M,Text:"Lluvia de tranferencias",select:function(){return n("gift")}}]:[{icon:F,Text:"Dress Code",select:function(){return n("dress")}},{icon:w,Text:"Ubicaci\xf3n",select:function(){return n("location")}},{icon:M,Text:"Lluvia de tranferencias",select:function(){return n("gift")}}];return Object(l.jsxs)(t.Fragment,{children:[Object(l.jsx)("div",{className:"btn_list_container",children:i.map((function(e,n){return"Presencial"===a&&1===n?Object(l.jsxs)("a",{className:"interactions_container",href:"https://maps.app.goo.gl/4UYDFaKT82Jacm3a7",target:"_blank",children:[Object(l.jsx)("img",{src:e.icon,alt:"icons",className:"icons_int"}),Object(l.jsx)("p",{children:e.Text})]},n):Object(l.jsxs)("div",{className:"interactions_container",onClick:function(){return e.select()},children:[Object(l.jsx)("img",{src:e.icon,alt:"icons",className:"icons_int"}),Object(l.jsx)("p",{children:e.Text})]},n)}))}),"Presencial"===a&&Object(l.jsx)("div",{className:"confirm_btn",children:"No olvides confirmar asistencia"}),Object(l.jsx)("div",{className:"home_btn",onClick:function(){return c(1)},children:"Inicio"}),Object(l.jsx)("img",{src:k,alt:"interaction_aj",className:"interaction_aj"})]})}var z=n.p+"static/media/male.d5902287.png",L=n.p+"static/media/female.4763f02c.png";n(4);function D(e){var a=e.selectInteraction,n=Object(t.useState)(0),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(l.jsx)(t.Fragment,{children:Object(l.jsxs)("div",{className:"".concat(0===i?"male":"female"," dress_code_container"),children:[Object(l.jsxs)("section",{className:"select_gender",children:[Object(l.jsx)("img",{src:z,alt:"male",onClick:function(){return o(0)}}),Object(l.jsx)("img",{src:L,alt:"female",onClick:function(){return o(1)}})]}),Object(l.jsxs)("section",{className:"dress_description",children:[Object(l.jsx)("img",{src:I,alt:"close_btn",onClick:function(){return a(null)}}),Object(l.jsx)("p",{children:0===i?"Camisa blanca, pantalon beige.":"Playa formal (vestidos largos, lisos, preferiblemente colores pasteles)"})]})]})})}var T=n.p+"static/media/qr.6c915994.png",G=n.p+"static/media/icon_pse.c530cbb5.png";function B(e){var a=e.selectInteraction;return Object(l.jsx)(t.Fragment,{children:Object(l.jsx)("div",{className:"card7",children:Object(l.jsxs)("div",{className:"qr_code_container",style:{backgroundColor:"#983434"},children:[Object(l.jsxs)("section",{className:"qr_container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:T,alt:"qr"}),Object(l.jsx)("p",{children:"Qr Nequi"})]}),Object(l.jsx)("p",{children:"N\xfamero de cuenta"}),Object(l.jsx)("p",{children:"3012786255"})]}),Object(l.jsxs)("section",{className:"pse_close_btn",children:[Object(l.jsxs)("a",{href:"https://recarga.nequi.com.co/bdigitalpsl/#!/",target:"_blank",className:"link",children:[Object(l.jsx)("p",{children:"Link pse"}),Object(l.jsx)("img",{src:G,alt:"pse",className:"pse_btn"})]}),Object(l.jsx)("img",{src:I,alt:"close",onClick:function(){return a(null)}})]})]})})})}function U(e){var a=e.user,n=e.handleView,c=Object(t.useState)(null),i=Object(s.a)(c,2),o=i[0],r=i[1];function d(e){r(e)}return Object(l.jsx)(t.Fragment,{children:Object(l.jsx)("div",{className:"card7",children:Object(l.jsxs)("div",{className:"interaction_view_container",children:[null===o&&Object(l.jsx)(E,{mode:a.mode,selectInteraction:function(e){return d(e)},handleView:n}),"dress"===o&&Object(l.jsx)(D,{selectInteraction:function(e){return d(e)}}),"gift"===o&&Object(l.jsx)(B,{selectInteraction:function(e){return d(e)}})]})})})}function H(e){var a=e.handleView;return Object(l.jsx)(t.Fragment,{children:Object(l.jsx)("div",{className:"card4",children:Object(l.jsxs)("div",{className:"parents_names_container",children:[Object(l.jsx)("h3",{className:"parents_name"}),Object(l.jsx)("p",{}),Object(l.jsx)("h3",{className:"parents_name",style:{textAlign:"center"},children:"Antes de continuar, \xa1queremos saber cu\xe1nto nos conoces!"}),Object(l.jsx)("p",{}),Object(l.jsx)("img",{className:"next_question",src:d,alt:"next_q",onClick:function(){return a(3)}})]})})})}function R(e){var a=e.handleView;return Object(l.jsx)(t.Fragment,{children:Object(l.jsx)("div",{className:"card4",children:Object(l.jsxs)("div",{className:"parents_names_container",children:[Object(l.jsx)("h3",{className:"parents_name",children:"En Memoria de Ana Isabel, mi coraz\xf3n te llama, te recuerda y te extra\xf1a."}),Object(l.jsx)("p",{}),Object(l.jsx)("h3",{className:"parents_name",children:"Gracias a Dios por una vida bajo tus alas."}),Object(l.jsx)("p",{}),Object(l.jsx)("img",{src:p,alt:"parents_a_j",className:"parents_a_j"}),Object(l.jsx)("img",{className:"next_question",src:d,alt:"next_q",onClick:function(){return a(5)}}),Object(l.jsx)("img",{className:"decoration3",src:_,alt:"decoration3"})]})})})}var K=[{"Invitado de":"Amy",name:"Jessica Niebles",mode:"Presencial",quota:"2",code:"3072"},{"Invitado de":"Amy",name:"Carlos Camacho",mode:"Presencial",quota:"1",code:"4775"},{"Invitado de":"Amy",name:"Diana Palacio",mode:"Presencial",quota:"2",code:"1141"},{"Invitado de":"Amy",name:"Goldwing Ahumada",mode:"Presencial",quota:"1",code:"6048"},{"Invitado de":"Amy",name:"Familia Sierra Cantillo",mode:"Presencial",quota:"2",code:"3523"},{"Invitado de":"Amy",name:"Familia L\xf3pez Sierra",mode:"Presencial",quota:"5",code:"6841"},{"Invitado de":"Amy",name:"Carolina Arr\xe1zola",mode:"Presencial",quota:"2",code:"2303"},{"Invitado de":"Amy",name:"Mar\xeda Jos\xe9 Carrillo",mode:"Presencial",quota:"2",code:"3528"},{"Invitado de":"Amy",name:"Familia Palacio Sierra ",mode:"Presencial",quota:"2",code:"1549"},{"Invitado de":"Amy",name:"Eduardo Barciela",mode:"Presencial",quota:"2",code:"7777"},{"Invitado de":"Amy",name:"Andrea Quiroz",mode:"Presencial",quota:"1",code:"5258"},{"Invitado de":"Amy",name:"Daniela Guette",mode:"Presencial",quota:"2",code:"1505"},{"Invitado de":"Amy",name:"Lina Caro",mode:"Presencial",quota:"2",code:"6680"},{"Invitado de":"Amy",name:"Julio Insignares",mode:"Presencial",quota:"1",code:"5246"},{"Invitado de":"Amy",name:"M\xf3nica Sierra",mode:"Presencial",quota:"1",code:"7012"},{"Invitado de":"Amy",name:"Familia Pedraza Sierra",mode:"Presencial",quota:"2",code:"1068"},{"Invitado de":"Amy",name:"Loui Ahumada",mode:"Presencial",quota:"1",code:"4618"},{"Invitado de":"Amy",name:"Sonia Ropa\xedn",mode:"Presencial",quota:"1",code:"9945"},{"Invitado de":"Amy",name:"Familia Donoso Elles",mode:"Virtual",quota:"0",code:"5467"},{"Invitado de":"Amy",name:"Mar\xeda Ort\xedz",mode:"Virtual",quota:"0",code:"1684"},{"Invitado de":"Amy",name:"Familia Mulett Bar\xf3n",mode:"Virtual",quota:"0",code:"8900"},{"Invitado de":"Amy",name:"Ang\xe9lica Bohorquez",mode:"Virtual",quota:"0",code:"2226"},{"Invitado de":"Amy",name:"Carolina Ahumada",mode:"Virtual",quota:"0",code:"9234"},{"Invitado de":"Amy",name:"Camila Torres",mode:"Virtual",quota:"0",code:"2038"},{"Invitado de":"Amy",name:"Camilo Vargas",mode:"Virtual",quota:"0",code:"5109"},{"Invitado de":"Amy",name:"Diana Hern\xe1ndez",mode:"Virtual",quota:"0",code:"9977"},{"Invitado de":"Amy",name:"Familia L\xf3pez Balbi",mode:"Virtual",quota:"0",code:"6556"},{"Invitado de":"Amy",name:"Andrea Ferrer",mode:"Virtual",quota:"0",code:"2477"},{"Invitado de":"Amy",name:"Natalia \xc1lvarez",mode:"Virtual",quota:"0",code:"7928"},{"Invitado de":"Amy",name:"Marco Bula",mode:"Virtual",quota:"0",code:"6087"},{"Invitado de":"En Com\xfan",name:"Familia Sierra Melendez",mode:"Presencial",quota:"3",code:"3953"},{"Invitado de":"En Com\xfan",name:"Claudia Guerrero",mode:"Presencial",quota:"1",code:"9843"},{"Invitado de":"En Com\xfan",name:"Franklin Arroyo",mode:"Presencial",quota:"1",code:"2754"},{"Invitado de":"En Com\xfan",name:"Valeria Olave",mode:"Presencial",quota:"1",code:"4253"},{"Invitado de":"En Com\xfan",name:"Familia De La Ossa Angulo",mode:"Presencial",quota:"2",code:"6585"},{"Invitado de":"En Com\xfan",name:"Kevin Castiblanco",mode:"Presencial",quota:"1",code:"6033"},{"Invitado de":"En Com\xfan",name:"Carolina Sierra",mode:"Presencial",quota:"1",code:"7994"},{"Invitado de":"En Com\xfan",name:"Familia D\xedaz Altamar",mode:"Presencial",quota:"2",code:"9026"},{"Invitado de":"En Com\xfan",name:"Daniel Gomez",mode:"Presencial",quota:"1",code:"6494"},{"Invitado de":"En Com\xfan",name:"Familia Vega Arguello",mode:"Presencial",quota:"2",code:"2076"},{"Invitado de":"En Com\xfan",name:"Angie Garc\xeda",mode:"Virtual",quota:"0",code:"9019"},{"Invitado de":"En Com\xfan",name:"Familia Lara Solano",mode:"Virtual",quota:"0",code:"5261"},{"Invitado de":"En Com\xfan",name:"Katalina Jaimes",mode:"Virtual",quota:"0",code:"5455"},{"Invitado de":"Joan",name:"Patricia Gonz\xe1lez",mode:"Presencial",quota:"1",code:"6572"},{"Invitado de":"Joan",name:"Jos\xe9 Forero Mej\xeda",mode:"Presencial",quota:"1",code:"7231"},{"Invitado de":"Joan",name:"Jos\xe9 Forero Forero",mode:"Presencial",quota:"1",code:"8159"},{"Invitado de":"Joan",name:"Familia Forero Mart\xednez",mode:"Presencial",quota:"2",code:"9336"},{"Invitado de":"Joan",name:"Valeria Cotes",mode:"Presencial",quota:"1",code:"5492"},{"Invitado de":"Joan",name:"Familia Forero Pe\xf1a",mode:"Presencial",quota:"3",code:"3136"},{"Invitado de":"Joan",name:"Eric Robinson",mode:"Presencial",quota:"2",code:"1272"},{"Invitado de":"Joan",name:"Familia Hern\xe1ndez Forero",mode:"Presencial",quota:"2",code:"4859"},{"Invitado de":"Joan",name:"July Mej\xeda",mode:"Presencial",quota:"1",code:"7567"},{"Invitado de":"Joan",name:"Belinda Mej\xeda",mode:"Presencial",quota:"1",code:"5756"},{"Invitado de":"Joan",name:"Antonio de Moya",mode:"Presencial",quota:"1",code:"4672"},{"Invitado de":"Joan",name:"Madelein Osorio",mode:"Presencial",quota:"2",code:"6110"},{"Invitado de":"Joan",name:"Malena Dussan",mode:"Presencial",quota:"1",code:"6744"},{"Invitado de":"Joan",name:"Heidys Calvo",mode:"Presencial",quota:"2",code:"1682"},{"Invitado de":"Joan",name:"Eduardo Solano",mode:"Virtual",quota:"0",code:"8550"},{"Invitado de":"Joan",name:"Luzmila Jim\xe9nez",mode:"Presencial",quota:"1",code:"6314"},{"Invitado de":"Joan",name:"Jos\xe9 Rojas",mode:"Virtual",quota:"0",code:"5161"},{"Invitado de":"Joan",name:"\xc1ngela Valderrama",mode:"Virtual",quota:"0",code:"3730"},{"Invitado de":"Joan",name:"Mar\xeda C\xe1ceres",mode:"Virtual",quota:"0",code:"6352"},{"Invitado de":"Joan",name:"Juan Aldana & Sra.",mode:"Virtual",quota:"0",code:"9352"},{"Invitado de":"Joan",name:"Marggie Acosta",mode:"Virtual",quota:"0",code:"6291"},{"Invitado de":"Joan",name:"Familia Forero Mart\xednez",mode:"Virtual",quota:"0",code:"3360"},{"Invitado de":"Joan",name:"Familia Mej\xeda Molina",mode:"Virtual",quota:"0",code:"4098"},{"Invitado de":"Joan",name:"Jos\xe9 Pallares",mode:"Virtual",quota:"0",code:"1666"},{"Invitado de":"Joan",name:"Galia Guzm\xe1n",mode:"Virtual",quota:"0",code:"4187"},{"Invitado de":"Joan",name:"Jaime Gonz\xe1lez",mode:"Presencial",quota:"1",code:"3924"},{"Invitado de":"Joan",name:"Familia Al-Ahmed Forero",mode:"Virtual",quota:"0",code:"3331"},{"Invitado de":"Joan",name:"Madonia Paz",mode:"Virtual",quota:"0",code:"7852"},{"Invitado de":"Joan",name:" Familia Juliao & Teffy",mode:"Virtual",quota:"0",code:"4771"},{"Invitado de":"Joan",name:"",mode:"Virtual",quota:"0",code:"0001"},{"Invitado de":"Joan",name:"Familia Mart\xednez Forero ",mode:"Virtual",quota:"0",code:"9335"}];n(18);var Q=function(){var e=Object(t.useState)(1),a=Object(s.a)(e,2),n=a[0],c=a[1],i=Object(t.useState)(null),o=Object(s.a)(i,2),r=o[0],d=o[1];function u(e){c(e)}return Object(l.jsx)("div",{className:"main_container",children:Object(l.jsxs)("main",{className:"card_container",children:[1===n&&Object(l.jsx)(m,{handleView:function(e){return u(e)}}),2===n&&Object(l.jsx)(b,{guests:K,handleView:function(e){return u(e)},selectUSer:function(e){return function(e){d(e)}(e)}}),8===n&&Object(l.jsx)(H,{handleView:function(e){return u(e)}}),3===n&&Object(l.jsx)(h,{handleView:function(e){return u(e)}}),4===n&&Object(l.jsx)(g,{handleView:function(e){return u(e)}}),9===n&&Object(l.jsx)(R,{handleView:function(e){return u(e)}}),5===n&&Object(l.jsx)(P,{user:r,handleView:function(e){return u(e)}}),6===n&&Object(l.jsx)(J,{user:r,handleView:function(e){return u(e)}}),7===n&&Object(l.jsx)(U,{user:r,handleView:function(e){return u(e)}})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(a){var n=a.getCLS,t=a.getFID,c=a.getFCP,i=a.getLCP,o=a.getTTFB;n(e),t(e),c(e),i(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(Q,{})}),document.getElementById("root")),Y()}],[[19,1,2]]]);
//# sourceMappingURL=main.7accec75.chunk.js.map