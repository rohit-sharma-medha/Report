import React, { useEffect, useRef, useState } from "react";
import ElasticCarousel, { consts } from "react-elastic-carousel";
// import { CarrrouselArraows } from "../Data/CarrrouselArraows";
import { Para } from "../Data/Para";
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png'


// import Item from "./Item";
// import "./styles.css";



export const Innovatiing = () => {

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentclass, setcurrentclass] = useState("carousel-wrapper_innovate_other");

  const handleOnChange = (pageIndex) => {
    console.log("currentItem", pageIndex);
    setCurrentPageIndex(pageIndex.index);

  };
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  // const addItem = () => {
  //   const nextItem = Math.max(1, items.length + 1);
  //   setItems([...items, nextItem]);
  // };

  const carouselRef = useRef(null);
  // const removeItem = () => {
  //   const endRange = Math.max(0, items.length - 1);
  //   setItems(items.slice(0, endRange));
  // };
  const jumpto = () => {
    carouselRef.current.goTo(0);
  };

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <img className={currentPageIndex ==0 ? "d-none" : " " } src={arrowleft} /> : <img className={currentPageIndex ==4 ? "d-none" : " " } src={arrowright} />
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  // const jumpto = () => {
  //   carouselRef.current.goTo(0);
  // };

  // function handlePrevClick() {
  //   console.log("Left");
  //   carouselRef.current.slidePrev();
  // }

  // function handleNextClick() {
  //   console.log("right");
  //   carouselRef.current.slideNext();
  // }

  useEffect(() => {
    if (currentPageIndex == 0) {
      setcurrentclass("carousel-wrapper_innovate")
    }
    else if (currentPageIndex % 2 === 0 && currentPageIndex !== 0) {
      setcurrentclass("carousel-wrapper_innovate_slide3")
    }
    else {
      setcurrentclass("carousel-wrapper_innovate_other")
    }
    // const mainCarouselClassName = ` ${currentPageIndex === 0 ? 'carousel-wrapper_innovate' : currentPageIndex !== 0 && currentPageIndex %2 ==0 ?"carousel-wrapper_innovate_slide3":"carousel-wrapper_innovate_other"}`;
    // setcurrentclass(mainCarouselClassName)
    console.log(currentPageIndex, currentclass);
  }, [currentPageIndex])


  return (
    <>

      <div className="carousel-wrapper" id="innovate_slide">
        {/* className={[2,4,6].includes(currentPageIndex) ? "carousel-wrapper_innovate_slide3":currentPageIndex ==0 ?"carousel-wrapper_innovate":"carousel-wrapper_innovate_other"} */}
        <ElasticCarousel 
        // enableAutoPlay autoPlaySpeed={8000} 
        className={[2,4].includes(currentPageIndex) ? currentclass:''} onChange={handleOnChange} renderArrow={myArrow}>
          <div className="Inovate_slide Inovate_slide_1  d-flex flex-column align-item-start">
            <div className="col-12">
              <div className="row d-flex align-item-center justify-content-center">
                <div className="col-9">
                  <p className="INNOVATE_SLIDE1_heading_text BebasNeue">
                    AND INNOVATING IN OUR DIRECT PROGRAMS AND <br /> ACTIVITIES WITH STUDENTS TO REMAIN QUALITY-DRIVEN
                  </p>
                </div>
                <div className="col-10 mt-5" >
                  <p className="INNOVATE_SLIDE1_para_text Lato">
                    There’s no point getting aggressive about scale if it adversely impacts the quality <br /> of your direct student engagement. That’s why we’re always keeping students <br />and their changing aspirations first.

                    Last year:
                  </p>
                </div>
              </div>
            </div>


          </div>
          <div className="">
            <div className='d-flex  '>
              <div className='col-12 '>
                <div className='row mt-5 our_allum  d-flex flex-start'>
                  <div className={currentPageIndex == 1 ? "col-md-5 col-lg-5 col-xl-5 col-12 " : "d-none"} >
                    <p className={currentPageIndex == 1 ? " uppercontent-head  animate__animated animate__fadeInUp time1 Lato-700" : "d-none"}>Our alumni community <br/> became independent!</p>
                  </div>
                  <div className='col-md-6 col-lg-6 col-xl-6 col-12  ml-0'>
                    <p className={currentPageIndex == 1 ? "uppercontent-text animate__animated animate__fadeInUp time2 Lato" : "d-none"}>Registered as the Medhavi Association, they represent <br/> the spirit of young people pursuing varied interests and charting offbeat career paths with passion.</p>
                  </div>
                </div>


                <div className="row ">
                  <div className="col-12 mt-0  mt-md-5">
                    <div className="px-5 row d-flex justify-content-between">
                      <div className=" col-md-12 col-lg-6 col-xl-6 col-12 mt-0 mt-lg-5 mt-xl-5 mt-md-5 ">
                        <div className={currentPageIndex == 1 ? " d-flex mt-5 animate__animated animate__fadeInUp time3" : "d-flex mt-5 d-none"} >
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text  col-6 Lato" : "d-none"}>28 young community leaders <br /> came together on a changemaking <br /> journey</p>
                        </div>
                      </div>
                      <div className="pr-5 col-md-6 col-lg-6 col-xl-6 col-12 mt-0 mt-lg-5 mt-xl-5 mt-md-5 ">
                        <div className={currentPageIndex == 1 ? "animate__animated animate__fadeInUp time4 d-flex  mt-5" : "d-flex mt-5 d-none"}>
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text time_4s col-6 w3-animate-top Lato" : "d-none"}>Women alumni launched Simmer,<br /> a community for all the strong<br /> women speaking their truth</p>
                        </div>
                      </div>
                    </div>


                    <div className="px-5 row d-flex justify-content-between">
                      <div className=" col-md-6 col-lg-6 col-xl-6 col-12  ">
                        <div className={currentPageIndex == 1 ? "animate__animated animate__fadeInUp  time5 d-flex  mt-5  " : "d-flex mt-5 d-none"}>
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text  col-6  Lato" : "d-none"}>5 alumni in UP got elected as <br /> Alumni Chapter Heads to lead <br />volunteerism efforts in their cities</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-6 col-12  ">
                        <div className={currentPageIndex == 1 ? "animate__animated animate__fadeInUp time6 d-flex  mt-5" : "d-flex mt-5 d-none"}>
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text  col-6 w3-animate-top Lato" : "d-none"}>6000 alumni shared the<br /> pandemic’s effect on their career<br /> and life</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <CarrrouselArraows className="arrowbuttons" handlenext={handleNextClick} handleprev={handlePrevClick} /> */}

          </div>

          <div className={currentPageIndex == 2 ? "innovative_slide3 " : ""}>
            <div className={currentPageIndex === 2 ? "typed-out" : ""}>
             {currentPageIndex ==2 ?
             <Para index={currentPageIndex === 2 ? "cursor" : ""}  subject="The Chapter Head election was a great learning space where I experimented with all my skills — communicating to get votes, using my problem-solving and critical thinking abilities to make a phenomenal campaign, and leading a successful chapter in Gorakhpur after winning the election.<br/> <br/>  <br/>I have a keen interest in community mobilization. I want to focus on my Chapter head position, do well for my community, and finish my graduation well.” <br/>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp; <span style=color:#282828;>-  Manish, student and Medhavi</span>" />
             :"d-none"} </div>
          </div>
          <div>
            <div className='d-flex  '>
              <div className='col-12 '>
                <div className='row mt-5 ml-5  d-flex flex-start'>
                  <div className={currentPageIndex == 3 ? "col-md-12 col-lg-5 col-xl-5 col-12" : ""} >
                    <p className={currentPageIndex == 3 ? " uppercontent-head animate__animated animate__fadeInUp time_0s Lato-700" : "d-none"}>Our programs answered <br/> students’ changing needs</p>
                  </div>
                  <div className='col-md-12 col-lg-6 col-xl-6 col-12 '>
                    <p className={currentPageIndex == 3 ? "uppercontent-text animate__animated animate__fadeInUp time_1s Lato" : "d-none"}>Young people are looking for the flexibility to improve their skills from where they are, while experimenting with freelancing and entrepreneurship as supporting or alternate career routes. Our programs followed suit, as:</p>
                  </div>
                </div>


                <div className="row ">
                  <div className="col-12 ">
                    <div className="mt-5 row d-flex justify-content-between">
                      <div className="col-md-12 col-lg-6 col-xl-6 col-12 mt-0 mt-lg-5 mt-xl-5 mt-md-5 ">
                        <div className={currentPageIndex == 3 ? "animate__animated animate__fadeInUp time3 d-flex time3" : "d-none mt-5"} >
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 3 ? "innovative_slide2_para_text time_2s col-6 Lato" : "d-none"}>CAB, the career advancement bootcamp, adapted to blended delivery</p>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 col-xl-6 col-12 mt-0 mt-lg-5 mt-xl-5 mt-md-5">
                        <div className={currentPageIndex == 3 ? "animate__animated animate__fadeInUp time4 d-flex  " : "d-none mt-5"}>
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 3 ? "innovative_slide2_para_text  col-6  Lato" : ""}>Swarambh, which helps young people start freelancing careers, moved from communities to </p>
                        </div>
                      </div>
                    </div>


                    <div className="mt-5 row d-flex justify-content-between">
                      <div className="col-md-12 col-lg-6 col-xl-6 col-12 ">
                        <div className={currentPageIndex == 3 ? "animate__animated animate__fadeInUp time5 d-flex  " : "d-none mt-5"}>
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 3 ? "innovative_slide2_para_text  col-6  Lato" : ""}>o Svapoorna, a life skills-building program for adolescents, scaled to new schools</p>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 col-xl-6 col-12  ">
                        <div className={currentPageIndex == 3 ? "animate__animated animate__fadeInUp time6 d-flex  " : "d-none mt-5"}>
                          <span className="dot mx-5"></span>
                          <p className={currentPageIndex == 3 ? "innovative_slide2_para_text  col-6  Lato" : ""}>Youthscape, an entrepreneurial competition, led to a program on designing business model</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={currentPageIndex == 4 ? "innovative_slide3 " : ""}>
            <div className={currentPageIndex === 4 ? "type" : ""}>
              {
                currentPageIndex == 4 ?
                <Para className="cursor1" index={currentPageIndex === 4 ? "cursor1" : "d-none"} subject={"When I got introduced to freelancing, I was thrilled to know I could continue following my passion on the side. I built my technical and marketing skills, and got a clearer sense of my future.<br/> <br/><br/> Today, I often assist my father (a wedding photographer) at wedding shoots. When people question my choice, he shows confidence in my skills and does not let it discourage us.” <br/> <br/>   &nbsp; &nbsp;&nbsp; <span style=color:#282828; font-size:1rem;>-  Kajal, student and Swarambh alumnus</span>" } />
            : ""
              }
              </div>
          </div>
          {/* <div>
            <div className='d-flex  justify-content-center align-item-center '>
              <p className="h1">Waiting for the content </p>
            </div>
          </div> */}




          {/* <div className={currentPageIndex == 6 ? "innovative_slide3 " : ""}>
            <div className={currentPageIndex === 6 ? "typed-out" : ""}>

              <Para className="cursor2" index={currentPageIndex === 6 ? "cursor2" : ""} subject="Having spent just 6 months at Medha, the conclave was a learning experience for me. I met several people from different positions, understood our vision to scale with quality, and felt a wave of new energy and thinking. Sessions on habit-building and mindfulness also helped me pause and improve my sense of well-being. 

On top of all that, getting the 'Students' Choice' award was a memorable moment. It shot up my enthusiasm and dedication to work!”" />
            </div>
           
          </div> */}







          {/* <div>
            <button className="rec-arrow rec-arrow-left" onClick={handlePrevClick}>L</button>
            <button className="rec-arrow rec-arrow-right" onClick={handleNextClick}>R</button>
          </div> */}
        </ElasticCarousel>

      </div >
    </>
  );
}



