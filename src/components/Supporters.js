import React, { useEffect, useState } from 'react';
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

  const myArrow = ({ type, onClick, isEdge }) => {
    // console.log("currentPageIndex-------------------",currentPageIndex)
    const pointer = type === consts.PREV ? currentPageIndex == 0 ? "" : <img className={currentPageIndex == 0 ? 'arrow_left d-none' : "arrow_left_1"} src={arrowleft} /> : <img className={currentPageIndex == 0 ? 'arrow_right' : "arrow_right_1"} src={arrowright} />
    return (
      <button className={currentPageIndex != 0 ? "" : ""} onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }

  const handleOnChange = (currentItem, pageIndex) => {
    setCurrentPageIndex(pageIndex);
  };
  useEffect(() => {
    if(currentPageIndex ==0 ){
      setClass("firstSlide")
    }
  }, [])
  



  return (
    <>
      <div id="support" className="supporters">
        <Carousel className={currentPageIndex ==0 ?"support_slide1":""} renderArrow={myArrow} onChange={handleOnChange} >
          <div className=" ">


           <Slide1 />


          </div>
          <div>
            <Slide2 />
          </div>
          <div>
            <Slide3 />
          </div>
          <div>
            <Slide4 />
          </div>
          <div>5</div>
          <div>6</div>
        </Carousel>
      </div>
    </>
  )
}
