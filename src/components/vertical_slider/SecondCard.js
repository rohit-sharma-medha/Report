import React,{ useEffect, useRef, useState } from 'react'

export default function SecondCard() {
  const [isVisible, setIsVisible] = useState(false);
   
    
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
        
          observer.unobserve(ref.current);
        }
      };
    }, []);


    console.log("isVisible12",isVisible);

  return (
    <div className="vert_cards_text text-center first_card_sec " ref={ref}>

      {isVisible ?<p className="animate__animated animate__fadeInUp">IN 2021, WE SET AN AUDACIOUS GOAL OF HELPING <span className='yellow-text'>1 MILLION <br/> YOUTH</span> TRANSFORM THEIR LIVES IN THE NEXT 5 YEARS</p>:<div></div>}
    </div>
  )
}
