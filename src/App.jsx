import Experience from "./Experience";
import Herosection from "./Herosection";
import Message from "./Meeting";
import NavigationBar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProject from "./AllProject";
import Education from "./Education";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";

function App() {
  const Layout = ({ children }) => {
    return <div className="lg:pt-10 xl:pt-16 pt-5">{children}</div>;
  };

  const Project = ({children}) => {
    return <div className="lg:pt-4 xl:pt-5 md:pt-5">{children}</div>;
  }

  const Contacts = ({children}) => {
    return <div className="mt-20">{children}</div>;
  }

  

  return (
    <div
      className="overflow-y-scroll overflow-x-hidden bg-gradient-to-b from-black via-[#0F0A10] to-[#1B0E1E] h-screen"
      style={{ scrollbarWidth: "none" }}
    >
      <Router>
        <NavigationBar />
       
          <Routes>
            <Route path="/" element={<Herosection />}></Route>
            <Route path="/Experience" element={<Layout><Experience /></Layout>}></Route>
            <Route path="/Education" element={<Layout><Education /></Layout>}></Route>
            <Route path="/AllProject" element={<Project><AllProject /></Project>}></Route>
            <Route path="/Skills" element={<Layout><Skill /></Layout>}></Route>
            <Route path="/Contact" element={<Contacts><Contact/></Contacts>}></Route>
            <Route path="/About" element={<Layout><About /></Layout>}></Route>
          </Routes>
      

        <Message />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
