// import logo from './logo.svg';
import './App.css';
import 'animate.css';
import React, { useState, useRef, useEffect } from "react";
// import './app.scss'
import Vertical_slider from './components/Vertical_slider';
import { Slider2 } from './components/Slider2';
import { FirstComponent } from './components/FirstComponent';
import { Second } from './components/Second';
import { Thirslide } from './components/Thirdslide';
import { Verticla2 } from './components/Verticla2';
import { Innovatiing } from './components/Innovatiing';
import "./app.scss"
import { Strengthen } from './components/Strengthen';
import { Innovating1 } from './components/Innovating1';

function App() {

  const [activeComponent, setActiveComponent] = useState("Component1");
  const [isScrolled, setisScrolled] = useState(false)
  const componentRefs = {
    FirstComponent: useRef(null),
    Second: useRef(null),
    Thirslide: useRef(null),
    Vertical_slider: useRef(null),
    Verticla2: useRef(null),
    Innovatiing: useRef(null),
  };


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveComponent(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    Object.values(componentRefs).forEach((ref) => {
      observer.observe(ref.current);
    });
    return () => {
      Object.values(componentRefs).forEach((ref) => {
        observer.unobserve(ref.current);
      });
    };
  }, []);

  useEffect(() => {
    // if(!isScrolled){

    window.addEventListener("scroll", (event) => {
      // const id = 'FirstComponent';
      // const yOffset = -10;
      // const element = document.getElementById(id).nextElementSibling;
      // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      // const element= document.getElementById("FirstComponent").nextElementSibling
      // window.location.href = "#" + element.id
      // window.scrollTo({ top: y, behavior: 'smooth' });
      // const element = document.getElementById("FirstComponent").nextElementSibling
      // element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      // setisScrolled(true)
    })
  

  }, [])

return (
  <div className="App">
    <div className='section_container'>
    <div className="section_to_show"ref={componentRefs.FirstComponent} id="FirstComponent">
      <FirstComponent />
    </div>
    <div className="section_to_show"ref={componentRefs.Second} id="Component2">
      <Second />
    </div>
    <div className="section_to_show"ref={componentRefs.Thirslide} id="Component3">
      <Thirslide />
    </div>
    <div className="section_to_show"ref={componentRefs.Vertical_slider} id="Component4">
      <Vertical_slider />
    </div>
    {/* <div className="section_to_show"ref={componentRefs.Vertical_slider} id="Component4">
        <Vertical_slider />
      </div> */}
    <div className="section_to_show"ref={componentRefs.Verticla2} id="Component5">
      < Verticla2 />
    </div>

    <div className="section_to_show"ref={componentRefs.Innovatiing} id="Component6">
      < Innovatiing />
    </div>
    <Strengthen />
    </div>
    {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    {/* <h1 className="animate__animated animate__bounce animate__bounceIn">An animated element</h1> */}
    {/* <FirstComponent />
      <Second />
      <Thirslide />
    <Vertical_slider />
    <Verticla2 />
    <Slider2/> */}
    {/* <Innovatiing/> */}

    


  </div>
);
}

export default App;
