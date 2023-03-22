import React from 'react'
import "../Style/Carrerperp.css"

export const CareerPrep = () => {
    return (
        <>
            <div className=''>
                <div className='careerPrep_head col-8'>
                    <p className='careerPrep_head_text'>WHILE WE CONTINUED TO HELP STUDENTS ACHIEVE THEIR CAREER PREPARATION AND PROGRESSION GOALS</p>
                </div>
                <div className='carrerprep_1_slide d-flex justify-content-around d-flex flex-column   flex-md-column  flex-lg-row '>
                    <div className={`circle_career_prep mx-5 animate__animated  animate__fadeInLeft time1  d-flex flex-column `}>

                        <p className='yellow-text Career_prep_number'>2,700</p>
                        <p className='Career_prep_text'>
                        students registered for our 21st-century skills program
                        </p>
                    </div>
                    <div className={`circle_career_prep mx-5 my-2 animate__animated  animate__fadeInLeft time2`}>Remaining quality-driven in our direct student engagement</div>
                    <div className={`circle_career_prep mx-5 animate__animated  animate__fadeInLeft time3`}>And committing to data-driven decision-making at work</div>
                </div>
                <div className='carrerprep_2_slide d-flex justify-content-evenly d-flex flex-column   flex-md-column  flex-lg-row '>
                    <div className={`circle_career_prep mx-5 animate__animated  animate__fadeInLeft time1 `}>By driving greater adoption of ‘the Medha way’ at scale</div>
                    <div className={`circle_career_prep mx-5 my-2 animate__animated  animate__fadeInLeft time2`}>Remaining quality-driven in our direct student engagement</div>
                    {/* <div className={ `circle_career_prep mx-5 animate__animated  animate__fadeInLeft time3` }>And committing to data-driven decision-making at work</div> */}
                </div>

                <div className='careerPrep_foot d-flex justify-content-center mt-5'>
                    <p className='careerPrep_foot_paraText'>
                    For detailed insights about our impact in 2021-22
                    </p>
                    <span className='careerPrep_foot_button'>Read our Impact Report</span>
                </div>
            </div>

        </>
    )
}
