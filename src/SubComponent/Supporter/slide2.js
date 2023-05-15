import React from 'react'
import AccentureSqaure from '../../Assets/Images/Funder logos/Accenture-Sqaure.png';
import AxisBankFoundationforwebsitesquare from '../../Assets/Images/Funder logos/Axis-Bank-Foundation-for-website-(square).jpg';
import BainSquare from '../../Assets/Images/Funder logos/Bain-Square.png';
import BankofAmericaSquare from '../../Assets/Images/Funder logos/Bank-of-America-Square.png';
import BayCapital from '../../Assets/Images/Funder logos/Bay-Capital.jpg';
import DalyanTransparent from '../../Assets/Images/Funder logos/Dalyan-Transparent.png';
import EdelGiveSquare from '../../Assets/Images/Funder logos/EdelGive-Square.png';
import EMpowerSquare from '../../Assets/Images/Funder logos/EMpower-Square.png';
import FidelitySquare from '../../Assets/Images/Funder logos/Fidelity-Square.jpg';
import FordFoundation from '../../Assets/Images/Funder logos/Ford-Foundation.jpg';
import JPMorganChase from '../../Assets/Images/Funder logos/JP-Morgan-Chase & co.jpg';
import LenovoSquare from '../../Assets/Images/Funder logos/Lenovo-Square.jpg';
import MUFG from '../../Assets/Images/Funder logos/MUFG.jpg';
// import { Supporters } from '../../components/Supporters';


export const Slide2 = () => {
  return (
    <>
        <div className='col-12'>
            <div className='row d-flex align-items-center'>
              <div className='supporter_Heading'>
                <p className='supporter_Heading_text text-center Lato-700 animate__animated animate__fadeInUp font-50 mt-5'>
                Our supporters
                </p>
              </div>
                <div className='px-md-5 mx-lg-5 px-xl-5 px-0 d-flex justify-content-center flex-md-row flex-xl-row flex-lg-row flex-columm Slide2_images '>
                    <div className='mr-md-3 mr-lg-3 mr-xl-3 mr-0 text-center col-md-3 col-xl-3 col-lg-3 col-5 animate__animated animate__fadeInUp time1 '>
                        <img className='supporter_img' src={AccentureSqaure}/>
                    </div>
                    <div className='mx-md-3 mx-lg-3 mx-xl-3 mx-0  text-center col-md-3 col-xl-3 col-lg-3 col-5 animate__animated animate__fadeInUp time1'>
                        <img className='supporter_img' src={AxisBankFoundationforwebsitesquare}/>
                    </div>
                    <div className='mx-md-3 mx-lg-3 mx-xl-3 mx-0  text-center col-md-3 col-xl-3 col-lg-3 col-5 animate__animated animate__fadeInUp time1'>
                        <img className='supporter_img' src={BainSquare}/>
                    </div>
                    <div className='mx-md-3 mx-lg-3 mx-xl-3 mx-0  text-center col-md-3 col-xl-3 col-lg-3 col-5 animate__animated animate__fadeInUp time1'>
                        <img className='supporter_img' src={BankofAmericaSquare}/>
                    </div>
                    
                </div>
                <div className='px-md-5 mx-lg-5 px-xl-5 px-0 d-flex justify-content-center flex-md-row flex-xl-row flex-lg-row Slide2_images'>
                    <div className=' text-center col-md-3 col-xl-3 col-lg-3 col-6 animate__animated animate__fadeInUp time2 '>
                        <img className='supporter_img' src={BayCapital}/>
                    </div>
                    <div className='  text-center col-md-3 col-xl-3 col-lg-3 col-6 animate__animated animate__fadeInUp time2'>
                        <img className='supporter_img' src={DalyanTransparent}/>
                    </div>
                    <div className=' text-center col-md-3 col-xl-3 col-lg-3 col-6 animate__animated animate__fadeInUp time2'>
                        <img className='supporter_img' src={EdelGiveSquare}/>
                    </div>
                    <div className=' text-center col-md-3 col-xl-3 col-lg-3 col-6 animate__animated animate__fadeInUp time2'>
                        <img className='supporter_img' src={EMpowerSquare}/>
                    </div>
                    
                </div>

                <div className='px-md-5 mx-lg-5 px-xl-5 px-0 d-flex justify-content-center flex-md-row flex-xl-row flex-lg-row Slide2_images'>
                    <div className=' text-center col-md-3 col-xl-3 col-lg-3 col-6 animate__animated animate__fadeInUp time3'>
                        <img className='supporter_img' src={FidelitySquare}/>
                    </div>
                    <div className='  text-center col-md-3 col-xl-3 col-lg-3 col-6 animate__animated animate__fadeInUp time3'>
                        <img className='supporter_img' src={FordFoundation}/>
                    </div>
                    <div className=' text-center col-md-3 col-xl-3 col-lg-3 col-6 animate__animated animate__fadeInUp time3'>
                        <img className='supporter_img' src={JPMorganChase}/>
                    </div>
                    <div className=' text-center col-md-3 col-xl-3 col-lg-3 col-6 animate__animated animate__fadeInUp time3'>
                        <img className='supporter_img' src={LenovoSquare}/>
                    </div>
                    
                </div>
                
                <div className='d-flex justify-content-center'>
                    <div className='animate__animated animate__fadeInUp time3'>
                        <img className='supporter_img' src={MUFG}/>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    
    </>
  )
}
