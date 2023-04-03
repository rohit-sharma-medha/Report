import React, { useState } from 'react';
import Carousel, { consts } from "react-elastic-carousel";

export const Innovating1 = () => {
  const [classAdd, setclassAdd] = useState("")
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <img src={arrowleft} /> : <img className={currentPageIndex ==6 ? "d-none" : " " } src={arrowright} />
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }

  

  return (
    <>
      <div id="" className="">
        <Carousel renderArrow={myArrow}   divsToShow={1} onChange={handleOnChange} >
          <div className="">
            
              
           1


          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </Carousel>
      </div>
    </>
  )
}
