import React, { useRef, useState } from 'react'
import Carousel, { consts } from "react-elastic-carousel";
import { Slide1 } from '../SubComponent/Strengthing/Slide1';
import { Slide2 } from '../SubComponent/Strengthing/Slide2';
import { Slide3 } from '../SubComponent/Strengthing/Slide3';
import { Slide4 } from '../SubComponent/Strengthing/Slide4';
import { Slide6 } from '../SubComponent/Strengthing/Slide6';
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png';
import swati_img from '../Assets/Images/strength/Swati.png'
import sonali_img from '../Assets/Images/strength/Sonali.png'
import shivnagi from "../Assets/Images/strength/Shivangi.png"

export const Strengthen = () => {

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <img
          className={currentPageIndex == 0 ? "d-none left_arrow_image" : "left_arrow_image"}
          src={arrowleft}
        />
      ) : (
        <img
          className={currentPageIndex !== 6 ? "rigth_arrow_image" : "d-none rigth_arrow_image"}
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
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleOnChange = (currentItem, pageIndex) => {
      setCurrentPageIndex(pageIndex);
  };
  const gotoRef2 = useRef(null);

  const goToSlide = (slideIndex) => {
    gotoRef2.current.goTo(slideIndex);
  };
  
  return (
    <>
      <div id="Strength" className="Strength">
        <Carousel 
        // enableAutoPlay autoPlaySpeed={9000} 
        ref={gotoRef2}
        className='Strength_main' renderArrow={myArrow} onChange={handleOnChange}>
          <div className="Item Strength-item1 col-10">
            {
              currentPageIndex == 0 ? <Slide1 index={currentPageIndex}/> :""
            }
            
          </div>
          <div className="item">
            {currentPageIndex == 1 ? <Slide2  index={currentPageIndex}/> :""}
            
          </div>
          <div className="item">
            {
              currentPageIndex ==2 ?<Slide3 empclass="emp_slide_1" headClass="head_slide_1" index={currentPageIndex} className="cursor_slide" 
              subject = "<span class='head_slide_1 Lato' >“Read the stories that data tells.</span> <br/> <br/>In the development sector, your wins often feel far and few compared to failures. However, it’s worthwhile to be curious about what the data says. Data shows you the cracks, but it also tells you what is working – and how you can replicate the best practices. <br/> <br/> <br/>  To be data-driven means to read the stories that data tells. By engaging goalkeep to strengthen our data culture, investing in technology ahead of time, and having D&I as a standalone department, we’ve showcased our commitment to being data-driven.” <br/> <br/> <span class=Lato-700 style=color:#282828;>-  Swati, Medha employee</span>" head="“Read the stories that data tells." 
              emp="-  Swati, Medha employee"  img={swati_img}/>
          :""
            }
            </div> 
          <div className="item" >

            
            {
              currentPageIndex == 3 ? <Slide4 index={currentPageIndex}/>:""
            }
          </div>
          <div className="item">
            {
              currentPageIndex ==4 ?<Slide3 empclass="emp_slide_2" headClass="head_slide_2" index={currentPageIndex} className="cursor_slide2" head="“I make my arguments with confidence." 
              subject = "<span class='head_slide_1 Lato' >“I make my arguments with confidence.</span> <br/> <br/>To build a better relationship with colleges, I must delve deeper into our previous work on campus. Data gives me insights, such as the streams our programs are more effective in, which help me form better strategies for my area's performance. <br/> <br/>I can also make my arguments more fearlessly and honestly before colleges during strategic pitches, which undoubtedly improves my relationships. <br/> <br/> <span class=Lato-700 style=color:#282828;>-  Sonali, Core Programs, Medha</span>" 
              
              emp="-  Sonali, Core Programs, Medha" img={sonali_img} />
          :""              
            }
            </div>
          <div className="item">
            {
              currentPageIndex == 5 ? <Slide6  index={currentPageIndex} />:""
            }
            
          </div>
          <div className="item">
            {
              currentPageIndex ==6 ?
              <Slide3 empclass="emp_slide_3" headClass="head_slide_3" index={currentPageIndex} className="cursor_slide3" head="I can better showcase my area." 
              subject = "<span class='head_slide_1 Lato' >I can better showcase my area.</span> <<br/> SIS's third version has made our work incredibly convenient on the ground. We can update all details in a single place and in real time while registration and certification details are updated automatically. <br/> <br/> For facilitators, with many details to track, SIS eases their admin work and leaves more time to focus on students. It also helps me see my area's growth and showcase its story using registration or internship numbers. <br/> <br/> <span class=Lato-700 style=color:#282828;>-  Shivangi, Core Programs, Medha</span>" 
              
              emp="-  Shivangi, Core Programs, Medha"  img={shivnagi} />
          :""              
            }
            </div>
        </Carousel>
        <button onClick={() => goToSlide(0)} className={currentPageIndex != 0 ? 'gototext Lato pointer_class' : "d-none"} >
          back to main slide
        </button>
      </div>
      
    </>
  )
}
