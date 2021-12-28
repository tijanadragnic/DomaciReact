import Write from "./pages/write/write";

import Homepage from "./pages/homepage/homepage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Single from "./pages/single/Single";

function App() {
  const currentUser = true;
  return (
   
          <><Homepage /><Write/> <Single/></>
       
        
    
  );
}

export default App;