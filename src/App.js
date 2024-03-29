import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './media.css'
import "./app.scss"
import ReactFullpage from '@fullpage/react-fullpage';
import { FirstComponent } from './components/FirstComponent';
import { Second } from './components/Second';
import { Thirslide } from './components/thirdSlide/Thirdslide';
import Vertical_slider from './components/vertical_slider/Vertical_slider';
import { Verticla2 } from './components/Verticla2';
import { Innovatiing } from './components/Innovatiing';
import { Strengthen } from './components/Strengthen';
import { TeamCapability } from './components/TeamCapability';
import { CareerPrep } from './components/CareerPrep';
import { Supporters } from './components/Supporters';
import { Heading } from './SubComponent/common/Heading';
import { IconwithMsg } from './SubComponent/common/IconwithMsg';
import { Millionyoutuh } from './components/Millionyoutuh';
import { Socialchange } from './components/Socialchange';
import { Impact } from './components/Impact';
// import { Innovating1 } from './components/Innovating1';

const fullpageOptions = {
  anchors: ['section1', 'section2', 'section3'],
  sectionsColor: ['#4BBFC3', '#7BAABE', '#f03c69'],
  afterLoad: (origin, destination, direction) => {
    // Pause the screen until user clicks a button
    let isPaused = true;
    const pauseScreen = () => {
      isPaused = false;
    };

    while (isPaused) {
      // Do nothing, wait for user to click a button
    }

    // User has clicked a button, continue to next section
    return true;
  },
};


function App() {

  const [activeSection, setActiveSection] = React.useState(0);
  const sliderRef = React.useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  }, [])

  // const handleProgress = (origin, destination, direction) => {
  //   setActiveSection(destination.index);
  //   // go to the first slide when the user enters the carousel section
  //   if (destination.index === 2) {
  //     sliderRef.current.slickGoTo(0);
  //   }
  // };



  return (
    <div className="App">
      <ReactFullpage
        // {...fullpageOptions}
        //fullpage options
        // licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <FirstComponent />

              </div>

              {/* <div className="section">
                <IconwithMsg/>

              </div> */}

              <div className="section">
                <Second />
              </div>
              <div className="section section3">
                <Thirslide />
              </div>
              <div className="section section_4 ">
                <Millionyoutuh />
              </div>
              <div className="section section_4 ">
                <Socialchange />
              </div>

              <div className="section section_4 ">
                <Impact />
              </div>

              <div className={`section ${activeSection === 2 ? "active" : ""}`}>
                <Verticla2 />
              </div>


              <div className="section ">
                <Innovatiing />
              </div>

              <div className="section ">
                <Strengthen />
              </div>


              <div className="section teamCabability">
                <TeamCapability />
              </div>
              <div className='section careerPrep'>
                <CareerPrep />
              </div>
              <div className='section support'>
                <Supporters />
              </div>



            </ReactFullpage.Wrapper>


          );
        }}

      // onProgress={handleProgress}
      />
    </div>
  );
}

export default App;
