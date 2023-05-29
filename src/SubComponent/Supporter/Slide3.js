import React from 'react';
import HaryanaGov from '../../Assets/Images/Government logos/Department of Higher Education, Haryana.png'
import UpGov from '../../Assets/Images/Government logos/Directorate of Technical Education, UP.jpg';
import SDIT from '../../Assets/Images/Government logos/SDIT Haryana.png'
// Directorate of Technical Education, UP.jpg
// SDIT Haryana.png
export const Slide3 = () => {
    return (
        <>

            <div className='col-12'>
                <div className='row '>
                    <div className='supporter_Heading'>
                        <p className='supporter_Heading_text font-color text-center Lato-700 animate__animated animate__fadeInUp time1 mt-md-0 mt-lg-5 mt-xl-5 mt-0'>
                            Our government partners
                        </p>
                    </div>

                    <div className='d-flex justify-content-evenly flex-md-row flex-lg-row flex-xl-row flex-column supporter_Cards_slide3'>
                        <div className='text-center animate__animated animate__fadeInUp time2 '>
                            <img className='supporter_img_slide3 ' src={UpGov} />
                            <p className='font-color Lato text-center supporter_text_slide3 font-30'>Directorate of Technical <br/> Education, Uttar Pradesh</p>
                        </div>
                        <div className='mx-5 text-center animate__animated animate__fadeInUp time3'>
                            <img className=' supporter__slide3_img2' src={HaryanaGov} />
                            <p className='Lato font-color text-center supporter_text_slide3 font-30'>Department of Higher <br/> Education, Haryana</p>
                            {/* <img className='supporter_img' src={AxisBankFoundationforwebsitesquare} /> */}
                        </div>
                        <div className='text-center animate__animated animate__fadeInUp time4'>
                            <img className='supporter_img_slide3' src={SDIT} />
                            <p className='Lato font-color text-center supporter_text_slide3 font-30'>Skill Development and Industrial <br/>Training Department, Haryana</p>
                            {/* <img className='supporter_img' src={BankofAmericaSquare} /> */}

                        </div>


                    </div>
                </div>

            </div>

        </>
    )
}
