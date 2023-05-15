import React, { useRef, useState } from 'react'
import Carousel, { consts } from "react-elastic-carousel";
import "../Style/Team.css"
import { Slide1 } from '../SubComponent/Team/Slide1';
import { Slide2 } from '../SubComponent/Team/Slide2';
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png'
import { Slide4 } from '../SubComponent/Team/Slide4';
import { Slide5 } from '../SubComponent/Team/Slide5';

export const TeamCapability = () => {



  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleOnChange = (currentItem, pageIndex) => {
    setCurrentPageIndex(pageIndex);
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
          className={currentPageIndex !== 3 ? "rigth_arrow_image" : "d-none rigth_arrow_image"}
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

  const gotoRef3 = useRef(null);
  const goToSlide = (slideIndex) => {
    gotoRef3.current.goTo(slideIndex);
  };



  return (
    <>

      <div id="TeamCapabilities" className="TeamCapability">
        <Carousel
          // enableAutoPlay autoPlaySpeed={9000} 
          ref={gotoRef3}
          className='Team_main' renderArrow={myArrow} onChange={handleOnChange}>
          <div className=" col-10 TeamCapability_Slide1 d-flex justify-content-center align-items-center ">
            {currentPageIndex == 0 ? <Slide1 index={currentPageIndex} /> : ""}

          </div>
          <div className="item">
            {currentPageIndex == 1 ? <Slide2 /> : ""}

          </div>

          <div className=" ">
            {currentPageIndex == 2 ? <Slide4 index={currentPageIndex} /> : ""}

          </div>
          <div className=" ">
            {currentPageIndex == 3 ? <Slide5 index={currentPageIndex} /> : ""}

          </div>

        
        </Carousel>
        <button onClick={() => goToSlide(0)} className={currentPageIndex != 0 ? 'gototext Lato pointer_class' : "d-none"} >
          back to main slide
        </button>
      </div>


    </>
  )
}
