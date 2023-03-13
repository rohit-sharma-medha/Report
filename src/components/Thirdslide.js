import React, { useEffect, useRef, useState } from 'react'

export const Thirslide = () => {
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)

  const callbackFunction = (entries) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  }
  

  useEffect(() => {
    
    const observer = new IntersectionObserver(callbackFunction)
    if (containerRef.current) observer.observe(containerRef.current)
    console.log('isVisible',isVisible);
    return () => {
      if(containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef])


  return (
    <>
      <div className="cards3rd" ref={containerRef} >
        <div className="first_part row first-row-cards d-flex justify-content-around mb-5 text-center">
          <div  className={isVisible ? "card_1 mb-sm-5  col-xl-4 col-lg-4 col-md-12 col-12 animate__animated animate__fadeInLeft time1":""}>
            <div className={isVisible ?"card border-0 ":"card "} >
              <div className="content " >
                <p className='Number_Text yellow-text text-center '>18,000</p>
                <p className='text-center info_text '>youth to build 21st-<br />century skills</p>
              </div>
              {/* <!-- Card Content Here --> */}
            </div>
          </div>
          <div  className={isVisible ? "card_1 mb-sm-5  col-xl-4 col-lg-4 col-md-12 col-12 animate__animated animate__fadeInLeft time2":""}>
            <div className={isVisible ?"card border-0 ":"card "} >
              <div class="content">
                <p className='Number_Text yellow-text animated bounceInUp text-center'>300</p>
                <p className='text-center info_text'>teachers have created an <br /> engaging teaching <br /> experience</p>
              </div>
              {/* <!-- Card Content Here --> */}
            </div>
          </div>
        </div>
        <div className="second_part row d-flex justify-content-between  mb-5 text-center">
          
          <div className={isVisible ? "card_1 mb-sm-5  col-xl-4 col-lg-4 col-md-12 col-12 animate__animated animate__fadeInLeft time3":""}>
            <div className={isVisible ?"card border-0  ":"card "} >
              <div className="content">
                <p className='Number_Text yellow-text animated bounceInUp text-center'>27,000</p>
                <p className='text-center info_text'>youth have experienced <br /> student-centric classrooms</p>
              </div>
            </div>
          </div>
          <div  className={isVisible ? "card_1 mb-sm-5  col-xl-4 col-lg-4 col-md-12 col-12 animate__animated animate__fadeInLeft time4":""}>
            <div className={isVisible ? "card border-0  ":"card "} >
              <div className="content">
                <p className='Number_Text yellow-text animated bounceInUp text-center'>3</p>
                <p className='text-center info_text'>government departments <br /> have built career readiness <br /> systems</p>
              </div>
            </div>
          </div>
          <div  className={isVisible ? "card_1 mb-sm-5  col-xl-4 col-lg-4 col-md-12 col-12 animate__animated animate__fadeInLeft time5":""}>
            <div className={isVisible ?"card border-0 ":"card "} >
              <div className="content">
                <p className='Number_Text yellow-text animated bounceInUp text-center'>1000</p>
                <p className='text-center info_text'>employers have improved <br /> workplace exposure</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
