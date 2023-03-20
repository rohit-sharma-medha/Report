import React,{ useEffect, useRef, useState } from 'react';

export default function FirstCard() {

  const [Visible, setVisible] = useState(false);
   
    
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
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

        console.log("ref.current",ref.current);
        if (ref.current) {
        
          observer.unobserve(ref.current);
        }
      };
    }, []);


    console.log("Visible",Visible);
    

  return (
    <div className="col-12" ref={ref}>
      {Visible && <div className="card vert_cards_text text-center first_card_sec">
        <p className="animate__animated animate__fadeInUp">IN 2021, WE SET AN AUDACIOUS GOAL OF HELPING <span className='yellow-text'>1 MILLION <br/> YOUTH</span> TRANSFORM THEIR LIVES IN THE NEXT 5 YEARS</p>
        </div>}
    </div>
    
  )
}
