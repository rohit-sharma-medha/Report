import React, { useEffect, useRef, useState } from 'react';
import Carousel, { consts } from "react-elastic-carousel";
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png'
import { Slide2 } from '../SubComponent/Supporter/slide2';
import '../Style/supporters.css'
import { Slide3 } from '../SubComponent/Supporter/Slide3';
import { Slide4 } from '../SubComponent/Supporter/Slide4';
import { Slide1 } from '../SubComponent/Supporter/Slide1';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

export const Supporters = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [Class, setClass] = useState("")

  

  const handleOnChange = (currentItem, pageIndex) => {
    setCurrentPageIndex(pageIndex);
  };
  useEffect(() => {
    if(currentPageIndex ==0 ){
      setClass("firstSlide")
    }
  }, [])
  
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

  const gotoRef4 = useRef(null);
  const goToSlide = (slideIndex) => {
    gotoRef4.current.goTo(slideIndex);
  };


  return (
    <>
      <div id="support" className="supporters">
        <Carousel ref={gotoRef4} className={currentPageIndex ==0 ?"support_slide1":""} renderArrow={myArrow} onChange={handleOnChange} >
          <div className="col-10 d-flex justify-content-center align-items-center ">

           
          {currentPageIndex ==0 ? <Slide1 index={currentPageIndex}/> :""}

          </div>
          <div>
            {currentPageIndex == 1 ? <Slide2 /> :""}
            
          </div>
          <div>
            {currentPageIndex ==2 ?<Slide3/> :""}
            {/* <Slide3 /> */}
          </div>
          <div>
            {currentPageIndex == 3 ? <Slide4/> :""}
            {/* <Slide4 /> */}
          </div>
          
        </Carousel>
        <button onClick={() => goToSlide(0)} className={currentPageIndex != 0 ? 'gototext Lato-300 pointer_class' : "d-none"} >
          back to main slide
        </button>
      </div>
    </>
  )
}
