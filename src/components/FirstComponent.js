import React, { useEffect, useRef, useState } from 'react'
import 'animate.css';

export const FirstComponent = () => {


    const elementRef1 = useRef(null)
    const [ isVisible, setIsVisible ] = useState(true)
  
    const callbackFunction = (entries) => {
      const [ entry ] = entries
      setIsVisible(entry.isIntersecting)
    }
    
  
    useEffect(() => {
      
      const observer = new IntersectionObserver(callbackFunction)
      if (elementRef1.current) observer.observe(elementRef1.current)
        console.log("isVisible",isVisible)
      return () => {
        if(elementRef1.current) observer.unobserve(elementRef1.current)
      }
    }, [elementRef1])


    return (
        <>


            <div id="FirstSlide" className='fistslide'>

                <div className="">
                    <div className='text-head FirstSlide_text'>
                        <p className={isVisible ? 'animate__animated animate__fadeInUp Audacious_text BebasNeue':""}>AN AUDACIOUS YEAR AT MEDHA</p>
                        <div className={isVisible ?"animate__animated animate__fadeInUp line":""}></div>
                        <p className={isVisible ? "animate__animated animate__fadeInUp Annual_text Lato":""}>ANNUAL REPORT</p>
                        <p className={isVisible ? "animate__animated animate__fadeInUp Time_text Lato":""}>2021 - 2022</p>
                    </div>
                </div>
            </div>
        </>
    )
}
