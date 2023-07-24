import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Comments from "./pages/comments/Comments"
import Follow from "./pages/follow/Follow";
import MyPost from "./pages/myPost/MyPost";
import {  Routes, Route } from "react-router-dom";



function App() {

  
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
    </Routes>
    <Routes>
      <Route exact path="/profile" element={<Profile/>}/>
    </Routes>
    <Routes>
      <Route exact path="/comments" element={<Comments/>}/>
    </Routes>
    <Routes>
      <Route exact path="/follow" element={<Follow/>}/>
    </Routes>
    <Routes>
      <Route exact path="/mypost" element={<MyPost/>}/>
    </Routes>
    </>
  );
}

export default App;
