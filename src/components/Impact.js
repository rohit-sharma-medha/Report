import React, { useEffect, useRef, useState } from 'react'

export const Impact = () => {

  const impactRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)

  const callbackFunction = (entries) => {
    const [ entry ] = entries
    console.log("entry.isIntersecting",entry.isIntersecting);
    setIsVisible(entry.isIntersecting)
  }
  

  useEffect(() => {
    
    const observer = new IntersectionObserver(callbackFunction)
    if (impactRef.current) observer.observe(impactRef.current)
  
    return () => {
      if(impactRef.current) observer.unobserve(impactRef.current)
    }
  }, [])

  return (
    <>

      <div className='my-5' id="impact" ref={impactRef} >

       { <p   className={isVisible?  `text-center vert_cards_text font-color animate__animated  animate__fadeInUp font-50 Lato-500 time1`:"d-none" }>
          How will we <span className='yellow-text'>40X our impact</span>  since 2011?
        </p>}
        <div className='d-flex Align_to_center justify-content-center d-flex flex-column   flex-md-column  flex-lg-row '>
          <div className={isVisible ? `circle   animate__animated  animate__fadeInUp time2 font-30`:"d-none" }>By driving greater adoption of ‘the Medha way’ at scale</div>
          <div className={ isVisible ? `circle  animate__animated  animate__fadeInUp time3 font-30` :"d-none"}>Remaining quality-driven in our direct student engagement</div>
          <div className={ isVisible ?`circle  mr-lg-0 mr-xl-0 mr-md-3  animate__animated  animate__fadeInUp time4 font-30`:"d-none" }>And committing to data-driven decision-making at work</div>
        </div>
      </div>

    </>
  )
}
