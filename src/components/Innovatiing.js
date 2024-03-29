import React, { useEffect, useRef, useState } from "react";
import ElasticCarousel, { consts } from "react-elastic-carousel";
// import { CarrrouselArraows } from "../Data/CarrrouselArraows";
import { Para } from "../Data/Para";
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png'
import allum_shared from '../Assets/Images/Icons/Alumni-shared.svg'
import simmer from '../Assets/Images/Icons/Simmer.svg';
import changemaker from '../Assets/Images/Icons/Changemakersjourney.svg'
import chapterelection from '../Assets/Images/Icons/Chapterelection.svg'
import BlendedCAB from '../Assets/Images/Icons/BlendedCAB.svg';
import Freelance from '../Assets/Images/Icons/Freelance.svg'
import Skills from '../Assets/Images/Icons/Skills.svg'
import Entrepreneur from '../Assets/Images/Icons/Entrepreneur.svg'
import { MobilePara } from "../Data/MobilePara";
import { Heading } from "../SubComponent/common/Heading";
import { IconwithMsg } from "../SubComponent/common/IconwithMsg";
// import Item from "./Item"; BlendedCAB.svg Freelance.svg Skills.svg 
// import "./styles.css"; Entrepreneur.svg 



export const Innovatiing = () => {
  const [width, setwidth] = useState(window.innerWidth)
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
    const pointer =
      type === consts.PREV ? (
        <img
          className={currentPageIndex == 0 ? "d-none left_arrow_image" : "left_arrow_image"}
          src={arrowleft}
        />
      ) : (
        <img
          className={currentPageIndex !== 4 ? "rigth_arrow_image" : "d-none rigth_arrow_image"}
          src={arrowright}
        />
      );




    return (
      <>
        <button
          onClick={onClick}
          disabled={isEdge}
          className={
            type != "NEXT"
              ? " elastic-carousel__arrow rec-left "
              : currentPageIndex == 0 ? "elastic-carousel__1stslidearrow rec-right " : "elastic-carousel__arrow rec-right"
          }
        >
          {pointer}
        </button>
      </>

    );
  };


  const gotoRef1 = useRef(null);

  const goToSlide = (slideIndex) => {
    console.log("hello")
    gotoRef1.current.goTo(slideIndex);
  };

  useEffect(() => {
    if (currentPageIndex == 0) {
      setcurrentclass("carousel-wrapper_innovate")
    }

    else if (currentPageIndex === 2 && width > 600) {
      setcurrentclass(currentclass + " Manish_back")
    }
    else if (currentPageIndex === 4 && width > 600) {
      setcurrentclass(" Kajal_back")
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
          ref={gotoRef1}
          className={currentclass} onChange={handleOnChange} renderArrow={myArrow}>
          <div id='innovate_first_slide' className="Inovate_slide Inovate_slide_1  d-flex flex-column align-item-start">
            <div className="col-12">
              <div className="row d-flex align-item-center justify-content-center">
                <div className="col-md-9 col-lg-9 col-xl-9 col-12">
                  <p className="INNOVATE_SLIDE1_heading_text BebasNeue font-70">
                    AND INNOVATING IN OUR DIRECT PROGRAMS AND <br /> ACTIVITIES WITH STUDENTS TO REMAIN QUALITY-DRIVEN
                  </p>
                </div>
                <div id="INNOVATE_SLIDE1_para_text_id" className="col-md-10 col-lg-10 col-xl-10 col-12 mt-2" >
                  <p className="INNOVATE_SLIDE1_para_text Lato font-30">
                    There’s no point getting aggressive about scale if it adversely impacts the quality <br /> of your direct student engagement. That’s why we’re always keeping students <br />and their changing aspirations first.

                    Last year:
                  </p>
                </div>
              </div>
            </div>


          </div>
          <div className="">
            <div className='d-flex '>
              <div className=' new_width '>
                <div className=''>
                 


                  {
                    currentPageIndex == 1 ?
                      <Heading
                      content_head_common={"content-head-2"}
                      // class={`prl-2`}
                      paraclass={"content-para-2"}
                      headclass={`position-fixed`}
                      HeadingText={`Our alumni community \n became independent!`}
                        paratext={`Registered as the Medhavi Association, they represent \n the spirit of young people pursuing varied interests and \n charting offbeat career paths with passion.`}
                      /> : ""

                  }

                </div>


                <div className="row w-100 icon_with_msg ">
                  <div className="col-12 mt-0  mt-md-5 mrgin-up">
                    <div className=" row d-flex justify-content-between">
                      <div className=" col-md-12 col-lg-6 col-xl-6 col-12 mt-0 mt-lg-5 mt-xl-5 mt-md-5 ">
                        <div className={currentPageIndex == 1 ? " d-flex mt-5 animate__animated animate__fadeInUp time3" : "d-flex mt-5 d-none"} >
                          <span className="dot mx-md-5 mx-lg-5 mx-xl-5 mx-0  mx-0 changemaker">
                            <img className="alumuni_shared" src={changemaker} />

                          </span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text  col-md-6 col-xl-6 col-lg-6 col-9 Lato font-30 font-color" : "d-none"}>28 young community leaders <br /> came together on a changemaking <br /> journey</p>
                        </div>
                      </div>
                      <div className=" col-md-12 col-lg-6 col-xl-6 col-12 mt-0 mt-lg-5 mt-xl-5 mt-md-5 icon_with_msg_1st_part2">
                        <div className={currentPageIndex == 1 ? " d-flex mt-md-0 mt-lg-5 mt-xl-5 mt-5 animate__animated animate__fadeInUp time3" : "d-flex mt-5 d-none"}>
                          <span className="dot mx-md-5 mx-lg-5 mx-xl-5 mx-0 simmer">
                            <img className="alumuni_shared" src={chapterelection} />

                          </span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text time_4s col-md-6 col-xl-6 col-lg-6 col-9 w3-animate-top Lato font-30 font-color" : "d-none"}>5 alumni in UP got elected as <br /> Alumni Chapter Heads to lead <br />volunteerism efforts in their cities</p>
                        </div>
                      </div>
                    </div>


                    <div className="row  ">
                      <div className=" col-md-12 col-lg-6 col-xl-6 col-12  ">
                        <div className={currentPageIndex == 1 ? "animate__animated animate__fadeInUp  time5 d-flex  mt-5  " : "d-flex mt-5 d-none"}>
                          <span className="dot mx-md-5 mx-lg-5 mx-xl-5 mx-0 chapter_election">
                            <img className="alumuni_shared" src={simmer} />
                          </span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text  col-md-6 col-xl-6 col-lg-6 col-9  Lato font-30 font-color" : "d-none"}>Women alumni launched Simmer,a  community for all the strong women speaking their truth</p>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 col-xl-6 col-12  icon_with_msg_1st_part2">
                        <div className={currentPageIndex == 1 ? "animate__animated animate__fadeInUp time6 d-flex  mt-5" : "d-flex mt-5 d-none"}>
                          <span className="dot mx-md-5 mx-lg-5 mx-xl-5 mx-0 text-center">

                            <img className="alumuni_shared" src={allum_shared} />
                          </span>
                          <p className={currentPageIndex == 1 ? "innovative_slide2_para_text  col-md-6 col-xl-6 col-lg-6 col-9 Lato font-30 font-color" : "d-none"}>6000 alumni shared the<br /> pandemic’s effect on their career<br /> and life</p>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
            {/* <CarrrouselArraows className="arrowbuttons" handlenext={handleNextClick} handleprev={handlePrevClick} /> */}

          </div>

          <div id="manish" className={currentPageIndex == 2 ? "innovative_slide3 " : ""}>
            {width > 600 ? <div className={currentPageIndex === 2 ? "typed-out" : ""}>
              {currentPageIndex == 2 ?
                <Para index={currentPageIndex === 2 ? "cursor" : ""} subject="The Chapter Head election was a great learning space where I experimented with all my skills — communicating to get votes, using my problem-solving and critical thinking abilities to make a phenomenal campaign, and leading a successful chapter in Gorakhpur after winning the election.<br/> <br/>  <br/>I have a keen interest in community mobilization. I want to focus on my Chapter head position, do well for my community, and finish my graduation well.” <br/>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp; <span style=color:#282828;>-  Manish, student and Medhavi</span>" />
                : ""}
            </div> :
              <MobilePara
                person="manish"
                subject="The Chapter Head election was a great learning space where I experimented with all my skills — communicating to get votes, using my problem-solving and critical thinking abilities to make a phenomenal campaign, and leading a successful chapter in Gorakhpur after winning the election.<br/> <br/>  <br/>I have a keen interest in community mobilization. I want to focus on my Chapter head position, do well for my community, and finish my graduation well.” <br/>  <span style='color:#282828;font-weight: 700;'>-  Manish, student and Medhavi</span>" />}
          </div>
          <div className="">
            <div className='d-flex '>
              <div className='new_width '>
                <div className=''>
                 


                  {
                    currentPageIndex == 3 ?
                      <Heading
                      content_head_common={"content-head-2"}
                      // class={`prl-2`}
                      paraclass={"content-para-2"}
                      headclass={`position-fixed`}
                      HeadingText={`Our alumni community \n became independent!`}
                        paratext={`Registered as the Medhavi Association, they represent \n the spirit of young people pursuing varied interests and \n charting offbeat career paths with passion.`}
                      /> : ""

                  }

                </div>


                <div className="row  icon_with_msg1">
                  <div className="col-12 mt-0  ">
                    <div className="  row d-flex justify-content-between  ">
                      <div className=" col-md-12 col-lg-6 col-xl-6 col-12 mt-0 mt-lg-5 mt-xl-5 mt-md-5 ">
                        <div className={currentPageIndex == 3 ? " d-flex mt-5 animate__animated animate__fadeInUp time3" : "d-flex mt-5 d-none"} >
                          <span className="dot mx-md-5 mx-lg-5 mx-xl-5 mx-0 changemaker">
                            <img className="alumuni_shared" src={BlendedCAB} />

                          </span>
                          <p className={currentPageIndex == 3 ? "innovative_slide2_para_text  col-md-6 col-xl-6 col-lg-6 col-9 Lato font-30 font-color mt-2" : "d-none"}>CAB, the career advancement <br/>bootcamp, adapted to blended delivery</p>
                        </div>
                      </div>
                      <div className=" col-md-12 col-lg-6 col-xl-6 col-12 mt-0 mt-lg-5 mt-xl-5 mt-md-1 ">
                        <div className={currentPageIndex == 3 ? "animate__animated animate__fadeInUp time4 d-flex  mt-5" : "d-flex mt-5 d-none"}>
                          <span className="dot mx-md-5 mx-lg-5 mx-xl-5 mx-0 simmer">
                            <img className="alumuni_shared" src={Freelance} />

                          </span>
                          <p className={currentPageIndex == 3 ? "innovative_slide2_para_text time_4s col-md-6 col-xl-6 col-lg-6 col-9 w3-animate-top Lato font-30 font-color mt-3" : "d-none"}>Swarambh helped college-going <br/> women start freelancing careers</p>
                        </div>
                      </div>
                    </div>


                    <div className=" row ">
                      <div className=" col-md-12 col-lg-6 col-xl-6 col-12  ">
                        <div className={currentPageIndex == 3 ? "animate__animated animate__fadeInUp  time5 d-flex  mt-5  " : "d-flex mt-5 d-none"}>
                          <span className="dot mx-md-5 mx-lg-5 mx-xl-5 mx-0 chapter_election">
                            <img className="alumuni_shared" src={Skills} />
                          </span>
                          <p className={currentPageIndex == 3 ? "innovative_slide2_para_text  col-md-6 col-xl-6 col-lg-6 col-9  Lato font-30 font-color mt-3" : "d-none"}>Svapoorna helped adolescents build life skills in more schools</p>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 col-xl-6 col-12  ">
                        <div className={currentPageIndex == 3 ? "animate__animated animate__fadeInUp time6 d-flex  mt-5" : "d-flex mt-5 d-none"}>
                          <span className="dot mx-md-5 mx-lg-5 mx-xl-5 mx-0 text-center">

                            <img className="alumuni_shared" src={Entrepreneur} />
                          </span>
                          <p className={currentPageIndex == 3 ? "innovative_slide2_para_text  col-md-6 col-xl-6 col-lg-6 col-9 Lato font-30 font-color mt-2" : "d-none"}>An entrepreneurial competition<br/> led to a new program on designing business models</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <IconwithMsg /> */}
                </div>
              </div>
            </div>
            {/* <CarrrouselArraows className="arrowbuttons" handlenext={handleNextClick} handleprev={handlePrevClick} /> */}

          </div>
         
          <div id='manish' className={currentPageIndex == 4 ? "innovative_slide3 " : ""}>
            {width > 600 ?
              <div className={currentPageIndex === 4 ? "type" : ""}>
                {
                  currentPageIndex == 4 ?
                    <Para className="cursor1" index={currentPageIndex === 4 ? "cursor1" : "d-none"}
                      subject={"When I got introduced to freelancing, I was thrilled to know I could continue following my passion on the side. I built my technical and marketing skills, and got a clearer sense of my future.<br/> <br/><br/> Today, I often assist my father (a wedding photographer) at wedding shoots. When people question my choice, he shows confidence in my skills and does not let it discourage us.” <br/> <br/>   &nbsp; &nbsp;&nbsp; <span style='color:#282828;font-weight: 700;' >-  Kajal, student and Swarambh alumnus</span>"}
                    />
                    : ""
                }
              </div>
              :
              <MobilePara
                Person={"kajal"}
                subject="When I got introduced to freelancing, I was thrilled to know I could continue following my passion on the side. I built my technical and marketing skills, and got a clearer sense of my future.<br/> <br/> Today, I often assist my father (a wedding photographer) at wedding shoots. When people question my choice, he shows confidence in my skills and does not let it discourage us.” <br/> <br/>     <span style='color:#282828;font-weight: 700;'>-  Kajal, student and Swarambh alumnus</span>"
              />

            }


          </div>



        </ElasticCarousel>
        <button onClick={() => goToSlide(0)} className={currentPageIndex != 0 ? 'gototext Lato pointer_class' : "d-none"} >
          back to main slide
        </button>
      </div >
    </>
  );
}



