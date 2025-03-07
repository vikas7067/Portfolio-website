import Experience from "./Experience";
import Herosection from "./Herosection"
import Message from "./Meeting";
import NavigationBar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProject from "./AllProject";
import Education from "./Education";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
 

  return (
    <div className="overflow-y-scroll overflow-x-hidden bg-gradient-to-b from-black via-[#0F0A10] to-[#1B0E1E] h-screen" style={{scrollbarWidth:"none"}}>
      <Router>
      <NavigationBar/>
      <Routes>
      <Route path="/" element={<Herosection/>}></Route>
      <Route path="/Experience" element={<Experience/>}></Route>
      <Route path="/Education" element={<Education/>}></Route>
      <Route path="/AllProject" element={<AllProject/>}></Route>
      <Route path="/Skills" element={<Skill/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      <Message/>
      <Footer/>
      </Router>
    </div>
  )
}

export default App

