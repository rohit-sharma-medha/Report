import React from 'react';
import paperLess from '../../Assets/Images/Icons/Paperless.svg'
import Gym from '../../Assets/Images/Icons/Gym.svg'
import WFH from '../../Assets/Images/Icons/WFH.svg'
import Grow from '../../Assets/Images/Icons/Grow.svg'

export const Slide4 = () => {
  return (
    <>

      <div className="row mt-md-5 mt-lg-5 mt-xl-5 mt-0">
        <div className='col-12 '>
          <p className={"Team_Slide4_head Lato-700 animate__animated animate__fadeInUp time1 Lato text-center font-50 font-color"}>Grew with tenacity, diversity,<br /> and gym memberships!</p>
        </div>

        <div className='row mt-md-5 mt-lg-5 mt-xl-5 mt-0 team_slide_content pt-5 '>

          <div className='col-md-6 col-xl-6 col-lg-6 col-12 d-flex justify-content-center animate__animated animate__fadeInUp time2 '>
            <span className='Icon_slide4'><img className='team_slide4_icons' src={Grow} /></span>
            <p className='col-md-6 col-xl-6 col-lg-6 col-8 mt-2 mx-3 team_slide_content_text Lato font-30 font-color'>Our team grew by over 25%,<br/> and 50% of employees in<br/> the organization are women</p>
          </div>
          <div className='col-md-6 col-xl-6 col-lg-6 col-12 d-flex justify-content-center  animate__animated animate__fadeInUp time3'>
            <span className='Icon_slide4'><img className='team_slide4_icons' src={WFH} /></span>
            <p className='col-md-6 col-xl-6 col-lg-6 col-8 mt-2 mx-3 team_slide_content_text Lato font-30 font-color'>We defined our WFH vs. office<br/> balance organically, and 22% of<br/> employees worked remotely.</p>
          </div>
          <div className='col-md-6 col-xl-6 col-lg-6 col-12 d-flex justify-content-center mt-md-5 mt-lg-5 mt-xl-5 mt-0 animate__animated animate__fadeInUp time4'>
            <span className='Icon_slide4'><img className='team_slide4_icons' src={Gym} /></span>
            <p className='col-md-6 col-xl-6 col-lg-6 col-8 mt-2 mx-3 team_slide_content_text Lato font-30 font-color'>46 people used learning allowances of <br/> more than 6 lakhs, with 33% getting<br/> fitter in the gym!</p>
          </div>
          <div className='col-md-6 col-xl-6 col-lg-6 col-12 d-flex justify-content-center  mt-md-5 mt-lg-5 mt-xl-5 mt-0 animate__animated animate__fadeInUp time5'>
            <span className='Icon_slide4'><img className='team_slide4_icons' src={paperLess} /></span>
            <p className='col-md-6 col-xl-6 col-lg-6 col-8 mt-2 mx-3 team_slide_content_text Lato font-30 font-color'>We switched to paperless expense <br/> management, saving lots of manual<br/> work (and grievances!)</p>
          </div>

        </div>
      </div>

    </>
  )
}
