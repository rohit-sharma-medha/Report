import React, { useEffect, useRef, useState } from 'react'

export const Millionyoutuh = () => {

    const youthref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)


  const callbackFunction = (entries) => {
    const [entry] = entries
    console.log("entry.isIntersecting", entry.isIntersecting);
    setIsVisible(entry.isIntersecting)
  }


  useEffect(() => {

    const observer = new IntersectionObserver(callbackFunction)
    if ( youthref.current) observer.observe( youthref.current)

    return () => {
      if ( youthref.current) observer.unobserve( youthref.current)
    }
  }, [])

    return (
        
        <>


            <div className="col-12" id="youth" ref={youthref}>
                <div className=" vert_cards_text text-center first_card_sec" >

                    { isVisible ? <p className="animate__animated animate__fadeInUp font-color font-70 font-color ">IN 2021, WE SET AN AUDACIOUS GOAL OF HELPING <span className='yellow-text'>1 MILLION <br /> YOUTH</span> TRANSFORM THEIR LIVES IN THE NEXT 5 YEARS</p>:""}
                </div>
            </div>




        </>
    )
}
