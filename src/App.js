
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Search from "./components/Search";

 import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Routes, Route } from 'react-router-dom';
 import Createpost from "./components/Createpost";
import Profile from './components/Profile';

function App() {
  return (
    
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>

        <Route path="/createpost" element={<Createpost/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>

 

      </Routes>
    </div>
    
      
  );
}

export default App;
