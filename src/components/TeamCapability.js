import React, { useState } from 'react'
import Carousel, { consts } from "react-elastic-carousel";
import "../Style/Team.css"
import { Slide1 } from '../SubComponent/Team/Slide1';
import { Slide2 } from '../SubComponent/Team/Slide2';
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png'

export const TeamCapability = () => {


    
      const [currentPageIndex, setCurrentPageIndex] = useState(0);
    
      const handleOnChange = (currentItem, pageIndex) => {
          setCurrentPageIndex(pageIndex);
      };

      const myArrow=({ type, onClick, isEdge })=> {
        // console.log("currentPageIndex-------------------",currentPageIndex)
        const pointer = type === consts.PREV ? currentPageIndex ==0 ? "":<img className={currentPageIndex == 0 ?'arrow_left':"arrow_left_1"} src={arrowleft}/> : <img className={currentPageIndex == 0 ?'arrow_right':"arrow_right_1"} src={arrowright}/>
        return (
          <button className={currentPageIndex != 0?"":""} onClick={onClick} disabled={isEdge}>
            {pointer}
          </button>
        )
      }


  
  return (
    <>
    
    <div id="TeamCapabilities" className="TeamCapability">
        <Carousel 
        // enableAutoPlay autoPlaySpeed={9000} 
        className='Team_main'  renderArrow={myArrow} onChange={handleOnChange}>
          <div className=" col-10 TeamCapability_Slide1 d-flex justify-content-center align-items-center ">
           {currentPageIndex == 0 ? <Slide1 index={currentPageIndex}/> :""}
            
          </div>
           <div className="item">
            {currentPageIndex ==1 ? <Slide2  />:""}
            
          </div>
          
        </Carousel>
      </div>
    
    
    </>
  )
}
