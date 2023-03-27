import React from 'react';
import {ReactComponent as MySVG} from '../../Assets/Images/CircleGreen.svg';


import './FirstCircle.css';


const FirstCircleUi = function FirstCircleUi() {

  return (
    <div className='container row flex-column justify-content-around'>
            <div className='row'>
                <div className='col-12'>
                        <div className='row align-items-center'>
                            <div className='col-6 main_heading animate__animated animate__fadeInUp time1'>
                            Make vocational education <br/> aspirational in UP
                            </div>
                            <div className='col-6 headingPara animate__animated animate__fadeInUp time2'>
                            We renewed our 8-year-old partnership with the<br/> Department of Technical Education, Uttar Pradesh (DTE-UP) to strengthen polytechnic education, by:
                            </div>
                        </div>
                </div>

                </div>

     
            <div className='row circle_container'>
                    <div className='row'>
                            <div className='col-12'>

                                <div className="row justify-content-center">
                                    <MySVG className="img-fluid arrow-svg animate__animated animate__fadeInUp time9" id="svg"/>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-4 grayed_bubble text-center grayed_bubble animate__animated animate__fadeInUp time5' id='thirdBubble'>
                                        <div>
                                        Improving the physical learning facilities,
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className='row justify-content-around mb-4'>
                                        <div className='col-auto grayed_bubble text-center animate__animated animate__fadeInUp time4' id='SecondBubble'>
                                            <div>
                                                    Introducing an industry-relevant curriculum,

                                            </div>
                                   
                                        </div>
                                        <div className='col-auto grayed_bubble text-center animate__animated animate__fadeInUp time6' id='fourthBubble'>
                                        Helping industry and academia work closely
                                        </div>

                                    </div>

                                <div className='row justify-content-between'>
                                        <div className="col-auto grayed_bubble text-center animate__animated animate__fadeInUp time3" id="firstBubble">
                                        Building experiential facilitation skill in teachers,

                                        </div>
                                        
                                       
                                        <div className='col-auto grayed_bubble text-center animate__animated animate__fadeInUp time7' id='fifthBubble'>
                                        Driving data-backed governance in the system
                                        </div>
                                    </div>

                                <div className="row justify-content-center">
                                <div className='col-4 orange_bubble text-center animate__animated animate__fadeInUp time8' id='sixthBubble'>
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