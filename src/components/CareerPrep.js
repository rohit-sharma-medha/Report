import React, { useEffect, useRef, useState } from 'react'
import "../Style/Carrerperp.css"

export const CareerPrep = () => {



  const elementRef1 = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)

  const callbackFunction = (entries) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  }
  

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction)
    if (elementRef1.current) observer.observe(elementRef1.current)
  
    return () => {
      if(elementRef1.current) observer.unobserve(elementRef1.current)
    }
  }, [elementRef1])

    return (
        <>
            <div id="carrerprep" className='' ref={elementRef1}>
                <div className='careerPrep_head col-md-7 col-xl-7 col-lg-7 col-12'>
                    <p className='careerPrep_head_text BebasNeue'>WHILE WE CONTINUED TO HELP STUDENTS ACHIEVE <br /> THEIR CAREER PREPARATION AND PROGRESSION GOALS</p>
                </div>
                <div className='carrerprep_1_slide d-flex justify-content-around d-flex '>
                    <div  className={isVisible ?`col-md-4  col-xl-4 col-lg-4 col-6 circle_career_prep mx-md-5 mx-lg-5 mx-xl-5 mx-0 animate__animated  animate__fadeInUp time1  d-flex flex-column time2`:"d-none"}>

                        <p className='yellow-text Career_prep_number BebasNeue'>2,700</p>
                        <p className='Career_prep_text Lato'>
                            students registered for our 21st-century skills program
                        </p>
                    </div>
                    <div className={isVisible ? `col-md-4  col-xl-4 col-lg-4 col-6 circle_career_prep mx-md-5 mx-lg-5 mx-xl-5 mx-0 my-2 animate__animated  animate__fadeInUp time2 d-flex flex-column time3`:"d-none"}>
                        <p className='yellow-text Career_prep_number BebasNeue'>1200</p>
                        <p className='Career_prep_text Lato'>
                            students took up internships and <br/> full-time jobs
                        </p>
                    </div>
                    <div className={isVisible ? `col-md-4  col-xl-4 col-lg-4 col-6 circle_career_prep mx-md-5 mx-lg-5 mx-xl-5 mx-0 animate__animated  animate__fadeInUp  d-flex flex-column time4`:"d-none"}>
                        <p className='yellow-text Career_prep_number BebasNeue'>2X</p>
                        <p className='Career_prep_text Lato'>
                            women alumni as <br/> men completed <br/>internships
                        </p>
                    </div>
                </div>
                <div className='carrerprep_2_slide d-flex justify-content-evenly d-flex  '>
                    <div className={isVisible ? `circle_career_prep mx-md-5 mx-lg-5 mx-xl-5 mx-0 animate__animated  animate__fadeInUp  d-flex flex-column time5`:"d-none"}>
                        <p className='yellow-text Career_prep_number BebasNeue'>130</p>
                        <p className='Career_prep_text Lato'>
                            teachers built experiential facilitation skills
                        </p>
                    </div>
                    <div className={isVisible ? `circle_career_prep mx-md-5 mx-lg-5 mx-xl-5 mx-0 my-2 animate__animated  animate__fadeInUp  d-flex flex-column time6`:"d-none"}>
                        <p className='yellow-text Career_prep_number BebasNeue'>2,500</p>
                        <p className='Career_prep_text Lato'>
                            students indirectly  impacted by facilitated teachers
                        </p>
                    </div>
                    {/* <div className={ `circle_career_prep mx-5 animate__animated  animate__fadeInUp time3` }>And committing to data-driven decision-making at work</div> */}
                </div>

                <div className='careerPrep_foot d-flex justify-content-center mt-5'>
                    <p className={isVisible ? 'careerPrep_foot_paraText mt-2 Lato animate__animated  animate__fadeInUp time7':"d-none"}>
                        For detailed insights about our impact in 2021-22
                    </p>
                   
                    <span className={isVisible ? 'careerPrep_foot_button yellow-text Lato animate__animated  animate__fadeInUp time8':"d-none"}>Read our Impact Report</span>
                    
                </div>
            </div>

        </>
    )
}
