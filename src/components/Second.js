import React, {useRef, useState,useEffect } from 'react';

export const Second= () => {

  // const [isVisible, setIsVisible] = useState(false);
  
  // const elementRef = useRef(null);
  // useEffect(() => {
  //   // let classtobeAdded ="animate__animated animate__fadeInUp"
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true)
  //         console.log("hello",isVisible)
  //         // entry.target.classList.add("animate__fadeInUp");
  //       }
        
  //     });
  //   });
    
  //   observer.observe(elementRef.current);
  //   // console.log("isVisible ",isVisible);
  //   return () => {
  //     observer.unobserve(elementRef.current);
  //   };
  // }, []);



  const elementRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)

  const callbackFunction = (entries) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  }
  

  useEffect(() => {
    
    const observer = new IntersectionObserver(callbackFunction)
    if (elementRef.current) observer.observe(elementRef.current)
  
    return () => {
      if(elementRef.current) observer.unobserve(elementRef.current)
    }
  }, [elementRef])

  
  return (
    <>
    
    
        <div id="Second_slide"   className='Seond_slide '>
            <p ref={elementRef} className={isVisible ? " animate__animated animate__fadeInUp time2  second_slide_text BebasNeue":"font-0"} style={{}}>
            OVER THE PAST DECADE, <span className="yellow-text"> 85,000+</span> PASSIONATE YOUTH HAVE <br /> ENGAGED WITH US TO <span className="yellow-text">START CAREERS THEY ENJOY </span>
            </p>
        </div>
    
    </>
  )
}


