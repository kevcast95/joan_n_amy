import React,{useState} from "react";
import Presentation from "./components/card1";
import CodeView from "./components/card2";
import QuestionView from "./components/card3";
import ParentsView from "./components/card4";
import VideoView from "./components/card5";
import InvitationView from "./components/card6";
import InteractionView from "./components/card7";
import PreQuestions from "./components/card8";
import DedicatioView from "./components/card9";
import { guests } from "./data";



import './App.css';

function App() {
  const [renderView,setRenderView] = useState(1);
  const [user, setUser] = useState(null); 
  function handleView(view) {
    setRenderView(view)
  }

  function selectUSer(user) {
    setUser(user)
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
            guests={guests}
            handleView={(view)=>handleView(view)}
            selectUSer={(user)=> selectUSer(user)}
          />
        }
        {renderView === 8 && 
          <PreQuestions
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
        {renderView === 9 && 
          <DedicatioView
            handleView={(view)=>handleView(view)}
          />
        }
        {renderView === 5 && 
          <VideoView
            user={user}
            handleView={(view)=>handleView(view)}
          />
        }
        {renderView === 6 && 
          <InvitationView
            user={user}
            handleView={(view)=>handleView(view)}
          />
        }
        {renderView === 7 && 
          <InteractionView
            user={user}
            handleView={(view)=>handleView(view)}
          />
        }
      </main>
    </div>
  );
}

export default App;
