import React from 'react';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AddPost from './Components/add-post';
import Homepage from './Components/homepage';
import Post from './Components/post';

class App extends React.Component {


  render() {
    return <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/:id' element={<Post />}></Route>
          <Route path='/add-post' element={<AddPost />}></Route>

        </Routes>
      </BrowserRouter>
    </div>;
  }
}

export default App;




