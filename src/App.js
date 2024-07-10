import './App.css';
import './App.css';
import { Header } from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Banner } from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import MessEmail from './Components/MessEmail';
function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
        <MessEmail/>
        <Footer/>


    </div>
  );
}

export default App;
