import {BrowserRouter as Router ,Routes,Route,} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Navbar from "./components/NavBar";

function App() {
  return (
 <Router>
  <Navbar />
 <Routes>
<Route  path="/home"  element={<Home/>}  />
<Route  path="/about"    element={<About />}  />
<Route  path="/singlepost" element={<SinglePost />}  />
<Route  path="/post"     element={<Post />}  />
<Route  path="/project"  element={<Project />}  />
 </Routes>
 </Router>

  );
}

export default App;
