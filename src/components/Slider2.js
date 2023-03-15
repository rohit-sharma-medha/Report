import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Fab_uk from "../Assets/Images/FAB_Uttarakhand.png"


export const Slider2 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 0 && index < 4) {
        setIndex(index + 1);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [index]);
  
  function scroll(e) {

    e.wheelDelta < 0 ? (
     
      setIndex(index=>index+1)
     
    ) : (
      setIndex(index=>index-1)
      
   
    );

};
  useEffect(() => {
    window.addEventListener("wheel", scroll, true);

    return () => {
        window.removeEventListener("wheel", scroll, true);
    };
  }, [])


  return (
    <>

      {/* <div className='text-head FirstSlide_text' >
        <h1 className='animate__animated animate__backInUp Audacious_text'>An Audacious Year at Medha</h1>
        <div className="line"></div>
        <p className="animate__animated animate__backInUp Annual_text">Annual Report</p>
        <p className="animate__animated animate__bounce Time_text">2021 - 2022</p>
      </div> */}

    </>
  );
};

// export default slider2;


