import React,{useState} from "react";
import Presentation from "./components/card1";
import CodeView from "./components/card2";
import QuestionView from "./components/card3";
import ParentsView from "./components/card4";
import VideoView from "./components/card5";
import InvitationView from "./components/card6";
import InteractionView from "./components/card7";




import './App.css';

function App() {
  const [renderView,setRenderView] = useState(1)
  function handleView(view) {
    console.log("view,", view);
    setRenderView(view)
  }
  return (
    <div className="main_container">
      <main className="card_container">
        {renderView === 1 && 
          <Presentation
            handleView={(view)=>handleView(view)}
          />
        }
        {renderView === 2 && 
          <CodeView
            handleView={(view)=>handleView(view)}
          />
        }
        {renderView === 3 && 
          <QuestionView
            handleView={(view)=>handleView(view)}
          />
        }
        {renderView === 4 && 
          <ParentsView
            handleView={(view)=>handleView(view)}
          />
        }
        {renderView === 5 && 
          <VideoView
            handleView={(view)=>handleView(view)}
          />
        }
        {renderView === 6 && 
          <InvitationView
            handleView={(view)=>handleView(view)}
          />
        }
        {renderView === 7 && 
          <InteractionView
            handleView={(view)=>handleView(view)}
          />
        }
        
        {/* 
        <CodeView/>
        <QuestionView/>
        <ParentsView/>
        <VideoView/>
        <InvitationView/>
        <InteractionView/> 
        */}
      </main>
    </div>
  );
}

export default App;
