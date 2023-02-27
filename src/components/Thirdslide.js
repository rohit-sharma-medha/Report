import React, { useEffect, useRef } from 'react'

export const Thirslide = () => {
  const CardRef = useRef(null);
  const Card2Ref = useRef(null);
  const Card3Ref = useRef(null);
  const Card4Ref = useRef(null);
  const Card5Ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pulse');
        }
      });
    });
    
    observer.observe(CardRef.current);
    observer.observe(Card2Ref.current);
    observer.observe(Card3Ref.current);
    observer.observe(Card4Ref.current);
    observer.observe(Card5Ref.current);
    
    return () => {
      // observer.unobserve(element2Ref.current);
      observer.unobserve(CardRef.current);
    observer.unobserve(Card2Ref.current);
    observer.unobserve(Card3Ref.current);
    observer.unobserve(Card4Ref.current);
    observer.unobserve(Card5Ref.current);
    
    };
  }, []);
  return (
    <>
      <div className="cards3rd">
        <div className="row first-row-cards d-flex justify-content-between mb-5 text-center">
          <div className="col-md-4">
            <div className="card card_1" ref={CardRef}>
              <div className="content " >
                <p className='Number_Text yellow-text text-center'>18,000</p>
                <p className='text-center info_text '>youth to build 21st-<br/>century skills</p>
              </div>
              {/* <!-- Card Content Here --> */}
            </div>
          </div>
          <div className="col-md-4">
          <div className="card card_1" ref={Card2Ref}>
          <div class="content">
                <p className='Number_Text yellow-text animated bounceInUp text-center'>300</p>
                <p className='text-center info_text'>teachers have created an <br/> engaging teaching <br/> experience</p>
              </div>
              {/* <!-- Card Content Here --> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card_1" ref={Card3Ref}>
            <div className="content">
                <p className='Number_Text yellow-text animated bounceInUp text-center'>27,000</p>
                <p className='text-center info_text'>youth have experienced <br/> student-centric classrooms</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card_1" ref={Card4Ref}>
            <div className="content">
                <p className='Number_Text yellow-text animated bounceInUp text-center'>3</p>
                <p className='text-center info_text'>government departments <br/> have built career readiness <br/> systems</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card_1" ref={Card5Ref}>
            <div className="content">
                <p className='Number_Text yellow-text animated bounceInUp text-center'>1000</p>
                <p className='text-center info_text'>employers have improved <br/> workplace exposure</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
