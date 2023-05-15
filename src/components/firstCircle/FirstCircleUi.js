import React from 'react';
import {ReactComponent as MySVG} from '../../Assets/Images/CircleGreen.svg';
import { Heading } from '../../SubComponent/common/Heading';


import './FirstCircle.css';


const FirstCircleUi = function FirstCircleUi() {

  return (
    <div className='row flex-column justify-content-around mt-5'>
            <div className='row'>
                <div className='col-12'>
                        <div className='row align-items-center Firstcircle'>
                            <div className='col-md-6 col-xl-6 col-lg-6 col-12 main_heading animate__animated animate__fadeInUp time1 mb-lg-0 mb-xl-0 mb-md-0 mb-2 font-50 Lato-700'>
                            Make vocational education <br/> aspirational in UP
                            </div>
                            <div className='col-md-6 col-xl-6 col-lg-6 col-12 headingPara animate__animated animate__fadeInUp time2 mb-lg-0 mb-xl-0 mb-md-0 mb-2 font-30 Lato'>
                            We renewed our 8-year-old partnership with the<br/> Department of Technical Education, Uttar Pradesh (DTE-UP) to strengthen polytechnic education, by:
                            </div>
                        </div>
                        {/* <Heading
                         content_head_common={"content-head-4"}
                         headclass={`position-fixed`}
                     HeadingText={`Transform higher education \n in Haryana`} 
                     paratext={`We completed the halfway mark in a 2-year venture with \n the Department of Higher Education, Haryana (DHE- \n Haryana) to prepare college students for meaningful work \n  roles. In this time, we:`}
                     
                        /> */}
                </div>

                </div>

     
            <div className='row halforbit'>
                    <div className='row'>
                            <div className='col-12'>

                                <div className="row justify-content-center">
                                    <MySVG className="img-fluid arrow-svg animate__animated animate__fadeIn time9" id="svg"/>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-4 grayed_bubble text-center grayed_bubble animate__animated animate__fadeInUp time5 mb-lg-0 mb-xl-0 mb-md-0 mb-2 font-30' id='thirdBubble'>
                                        <div>
                                        Improving the physical learning facilities,
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className='row justify-content-around mb-lg-4 mb-md-4 mb-xl-4 mb-0'>
                                        <div className='col-auto grayed_bubble text-center animate__animated animate__fadeInUp time4 mb-lg-0 mb-xl-0 mb-md-0 mb-2 ' id='SecondBubble'>
                                            <div>
                                                    Introducing an industry-relevant curriculum,

                                            </div>
                                   
                                        </div>
                                        <div className='col-auto grayed_bubble text-center animate__animated animate__fadeInUp time6 mb-lg-0 mb-xl-0 mb-md-0 mb-2 ' id='fourthBubble'>
                                        Helping industry and academia work closely
                                        </div>

                                    </div>

                                <div className='row justify-content-between'>
                                        <div className="col-auto grayed_bubble text-center animate__animated animate__fadeInUp time3 mb-lg-0 mb-xl-0 mb-md-0 mb-2 " id="firstBubble">
                                        Building experiential facilitation skill in teachers,

                                        </div>
                                        
                                       
                                        <div className='col-auto grayed_bubble text-center animate__animated animate__fadeInUp time7 mb-lg-0 mb-xl-0 mb-md-0 mb-2' id='fifthBubble'>
                                        Driving data-backed governance in the system
                                        </div>
                                    </div>

                                <div className="row justify-content-center">
                                <div className='col-4 orange_bubble text-center animate__animated animate__fadeInUp time8 mb-lg-0 mb-xl-0 mb-md-0 mt-1 ' id='sixthBubble'>
                                        Potentially impact 70,000+ young people
                                        </div>

                                    
                                </div>
                                
                            

                            </div>
                        </div>

                </div> 


        </div>
  )
}

export default FirstCircleUi;