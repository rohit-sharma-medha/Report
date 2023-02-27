import React, {useRef, useState,useEffect } from 'react';
import { animateOnScroll } from 'react-animate-on-scroll';

export const Second= () => {

  const [isVisible, setIsVisible] = useState(false);
  
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('example-element-visible');
        }
      });
    });
    
    observer.observe(elementRef.current);
    
    return () => {
      observer.unobserve(elementRef.current);
    };
  }, []);
  
  return (
    <>
    
    
        <div  className='Seond_slide'>
            <p ref={elementRef} className={`second_slide_text`} style={{}}>
            Over the past decade, <span className="yellow-text"> 85,000+</span> passionate youth have <br />
                        engaged with us to <span className="yellow-text">start careers they enjoy</span>
            </p>
        </div>
    
    </>
  )
}


