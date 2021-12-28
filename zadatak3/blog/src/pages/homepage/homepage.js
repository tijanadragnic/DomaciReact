import Header from "../../Components/header/header";
import Posts from "../../Components/posts/Posts";

import "./homepage.css";

export default function Homepage() {
  
    return (
        <>
          <Header />
          <div className="home">
            <Posts />
            
          </div>
        </>
      );
    }
    