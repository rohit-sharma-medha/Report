import React, { useEffect, useState } from 'react';
import Carousel, { consts } from "react-elastic-carousel";
import { Slide1 } from '../SubComponent/Strengthing/Slide1';
import { Slide2 } from '../SubComponent/Strengthing/Slide2';
import { Slide3 } from '../SubComponent/Strengthing/Slide3';
import { Slide4 } from '../SubComponent/Strengthing/Slide4';
import { Slide6 } from '../SubComponent/Strengthing/Slide6';
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png';

export const Innovating1 = () => {
  const [classAdd, setclassAdd] = useState("")
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <img src={arrowleft} /> : <img src={arrowright} />
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleOnChange = (currentdiv, pageIndex) => {
    if (pageIndex == 0) {
      setclassAdd("carousel-wrapper_innovate")
    }
    else if (pageIndex % 2 === 0 && pageIndex !== 0) {
      setclassAdd("carousel-wrapper_innovate_slide3")
    }
    else {
      setclassAdd("carousel-wrapper_innovate_other")
    }
    setCurrentPageIndex(pageIndex);
  };
  useEffect(() => {
    console.log("classAdd", classAdd);
  }, [currentPageIndex])


  return (
    <>
      <div id="innovate_1" className="innavate_1">
        <Carousel className={classAdd} divsToShow={1} onChange={handleOnChange} >
          <div className="Inovate_slide Inovate_slide_1  d-flex flex-column align-item-start">
            <div className="col-12">
              <div className="row d-flex align-item-center justify-content-center">
                <div className="col-9">
                  <p className="INNOVATE_SLIDE1_heading_text" style={{ color: "#000" }}>
                    AND INNOVATING IN OUR DIRECT PROGRAMS AND <br /> ACTIVITIES WITH STUDENTS TO REMAIN QUALITY-DRIVEN
                  </p>
                </div>
                <div className="col-10 mt-5 d-flex flex-column" >
                  <p className="INNOVATE_SLIDE1_para_text">
                    There’s no point getting aggressive about scale if it adversely impacts the quality <br /> of your direct student engagement. That’s why we’re always keeping students <br />and their changing aspirations first.



                  </p>
                  <p className='mt-5'>
                    Last year:
                  </p>
                </div>
              </div>
            </div>


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
