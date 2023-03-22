
import React from 'react';

import {ReactComponent as MySVG} from '../../Assets/Images/Ellipse.svg';


import './SecondCircle.css';


const SecondCircleUi = function SecondCircleUi() {


  return (
    <div className='container row flex-column justify-content-around' style={{overflow:'hidden'}}>
            <div className='row'>
                <div className='col-12'>
                        <div className='row align-items-center'>
                            <div className='col-6 second_main_heading animate__animated animate__fadeInUp time1'>
                                Elevate on-the-job vocational training in Haryana
                            </div>
                            <div className='col-6 second_headingPara animate__animated animate__fadeInUp time2'>
                            Over the next 2 years, we will help the Skill Development and Industrial Training Department, Haryana (SDIT-Haryana) scale their dual-system of training model for vocational education students by:
                            </div>
                        </div>
                </div>

                </div>

     
            <div className='row circle_container'>
                    
                    <div className='row'>
                            <div className='col-12'>

                                <div className="row justify-content-center">
                                    <MySVG className="img-fluid semi-circle-svg-img animate__animated animate__fadeInUp time7" id="ellip_svg"/>

                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-6 row justify-content-center align-items-center text-center second_grayed_bubble animate__animated animate__fadeInUp time4' id='sBubble'>
                                        <div>
                                        Building strong industry partnerships for quality OJTs
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className='row justify-content-center second_row'>
                                    <div className='row justify-content-between' style={{position:'absolute',width:'70rem'}}>
                                        <div className='col-4 row justify-content-center align-items-center text-center second_grayed_bubble animate__animated animate__fadeInUp time3' id='fBubble'>
                                            <div>
                                            Providing on-the-job trainings (OJT) of 6 months’ duration

                                            </div>
                                   
                                        </div>
                                        <div className='col-4 row justify-content-center align-items-center text-center second_grayed_bubble animate__animated animate__fadeInUp time5' id='thBubble'>
                                            Doubling the number of OJT units in the state
                                        </div>

                                    </div>
                                    
                                </div>

                                <div>
                                    <div className='row justify-content-center'>
                                        
                                        <div className='col-6 row justify-content-center align-items-center text-center green_circle animate__animated animate__fadeInUp time6' id='foBubble'>
                                            <div>
                                                <div className='row justify-content-center' 
                                                    style={{
                                                        color:" #FFFFFF",
                                                        fontSize: "1.5rem" ,
                                                        fontWeight:700

                                                    }}>
                                                        Potentially impacting
                                                    </div>
                                                <div className='row justify-content-center'
                                                style={{
                                                    color:"#FFB900",
                                                    fontSize: "4rem" ,
                                                    fontWeight:400

                                                }}>
                                                    XXXX
                                                </div>
                                                <div className='row justify-content-center' 
                                                style={{
                                                    color:" #FFFFFF",
                                                    fontSize: "1.5rem",
                                                    fontWeight:700

                                                }}>
                                                    of students
                                                </div>

                                            </div>
                                       
                                        </div>
                                        
                                    </div>
                                </div>
                            

                            </div>
                        </div>

                </div> 


        </div>
  )
}

export default SecondCircleUi;