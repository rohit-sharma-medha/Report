
import React, { useEffect, useState } from 'react';

import { ReactComponent as MySVG } from '../../Assets/Images/Ellipse.svg';


import './SecondCircle.css';


const SecondCircleUi = function SecondCircleUi() {
    const [width, setwidth] = useState(window.innerWidth)
    // useEffect(() => {
    //   console.log("window.innerWidth",window.innerWidth)
    // }, [])

    const CicleChangeformobile = () => {
        return (
            <>

                <div>
                    <div className='circles  mb-5 mt-5'>
                        <div className='row  justify-content-center'>
                            <div className='col-6 row justify-content-center align-items-center text-center second_grayed_bubble1 animate__animated animate__fadeInUp time1' id='sBubble'>
                                <div>
                                    Building strong industry partnerships for quality OJTs
                                </div>

                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-6 row justify-content-center align-items-center text-center second_grayed_bubble1 animate__animated animate__fadeInUp time2' id='sBubble'>
                                <div>
                                    Building strong industry partnerships for quality OJTs
                                </div>

                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-12 row justify-content-center align-items-center text-center second_grayed_bubble1 animate__animated animate__fadeInUp time3' id='sBubble'>
                                <div>
                                    Building strong industry partnerships for quality OJTs
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='green_box '>
                        <div>
                            <div className='row justify-content-center'
                                style={{
                                    color: " #FFFFFF",
                                    fontSize: "1.5rem",
                                    fontWeight: 700

                                }}>
                                Potentially impacting
                            </div>
                            <div className='row justify-content-center'
                                style={{
                                    color: "#FFB900",
                                    fontSize: "2rem",
                                    fontWeight: 400

                                }}>
                                4000
                            </div>
                            <div className='row justify-content-center'
                                style={{
                                    color: " #FFFFFF",
                                    fontSize: "1.5rem",
                                    fontWeight: 700

                                }}>
                                of students
                            </div>

                        </div>

                    </div>
                </div>

            </>
        )
    }

    return (
        <div className='row flex-column justify-content-around' >
            <div className='row'>
                <div className='col-12'>
                    <div className=' d-flex justify-content-center mx-5 mt-5 Secondcircle '>
                        <div className='col-md-6  new-line font-50 col-xl-6 col-lg-6 col-12 ml-md-0 ml-lg-0 ml-xl-0 ml-3 mt-5 second_main_heading animate__animated animate__fadeInUp time1'>
                            {`Elevate on-the-job vocational  training in Haryana`}
                        </div>
                        <div className='new-line font-30 col-md-6 col-xl-6 col-lg-6 col-12 mt-5 second_headingPara animate__animated animate__fadeInUp time2'>
                            {`Over the next 2 years, we will help the Skill \n  Development and Industrial Training Department,\n  Haryana (SDIT-Haryana) scale their dual-system of \n training model for vocational education students by:
                        `}</div>
                    </div>
                </div>

            </div>


            {width >= 600 ?
                <div className='row circle_container'>

                    <div className='row'>
                        <div className='col-12'>

                            <div className="row justify-content-center">
                                <MySVG className="img-fluid semi-circle-svg-img animate__animated animate__fadeInUp time7" id="ellip_svg" />

                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-6 row justify-content-center align-items-center text-center second_grayed_bubble animate__animated animate__fadeInUp time4 font-30' id='sBubble'>
                                    <div>
                                        Building strong industry partnerships for quality OJTs
                                    </div>

                                </div>
                            </div>

                            <div className='row justify-content-center second_row'>
                                <div className='row justify-content-between' style={{ position: 'absolute', width: '70rem' }}>
                                    <div className='col-4 row justify-content-center align-items-center text-center second_grayed_bubble animate__animated animate__fadeInUp time3 font-30' id='fBubble'>
                                        <div>
                                            Providing on-the-job trainings (OJT) of 6 months’ duration

                                        </div>

                                    </div>
                                    <div className='col-4 row justify-content-center align-items-center text-center second_grayed_bubble animate__animated animate__fadeInUp time5 font-30' id='thBubble'>
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
                                                    color: " #FFFFFF",
                                                    fontSize: "1.5rem",
                                                    fontWeight: 700

                                                }}>
                                                Potentially impacting
                                            </div>
                                            <div className='row justify-content-center'
                                                style={{
                                                    color: "#FFB900",
                                                    fontSize: "4rem",
                                                    fontWeight: 400

                                                }}>
                                                4000
                                            </div>
                                            <div className='row justify-content-center'
                                                style={{
                                                    color: " #FFFFFF",
                                                    fontSize: "1.5rem",
                                                    fontWeight: 700

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
                : <CicleChangeformobile />
            }


        </div>
    )
}

export default SecondCircleUi;