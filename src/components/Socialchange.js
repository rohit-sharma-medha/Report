import React, { useEffect, useRef, useState } from 'react'

export const Socialchange = () => {

  const socialref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)


  const callbackFunction = (entries) => {
    const [entry] = entries
    console.log("entry.isIntersecting", entry.isIntersecting);
    setIsVisible(entry.isIntersecting)
  }


  useEffect(() => {

    const observer = new IntersectionObserver(callbackFunction)
    if (socialref.current) observer.observe(socialref.current)

    return () => {
      if (socialref.current) observer.unobserve(socialref.current)
    }
  }, [])
  return (
    <>

      <div className="col-12" ref={socialref}>
        <div className="card vert_cards_text text-center " >
          {isVisible ? <p className="animate__animated animate__fadeInUp Lato-700 font-50 yellow-text time1">1 million is not a random number</p>
            : ""}
          <div className='d-flex justify-content-center'>
            {isVisible ? <p className=" represent  animate__animated animate__fadeInUp   font-color Lato-700 time2">It represents 10 % of the estimated 9 million college-going<br /> students in India’s Hindi-speaking belt and serves as a <br />  <span className='yellow-text'> tipping point</span> for driving significant social change.</p> : ""}

          </div>
        </div>
      </div>


    </>
  )
}
