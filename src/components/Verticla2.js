import React, { useEffect, useRef, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel'
import { items } from '../Data/items';
import fab_uk from '../Assets/Images/FAB_Uttarakhand.png'
import proffesional from '../Assets/Images/prof_new_trans.png'
import veteran from '../Assets/Images/veteran_trans_new.png'
import Xicon from '../Assets/Images/cross_new_trans.png'
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png'

import FirstCircleUi from '../components/firstCircle/FirstCircleUi';
import SecondCircleUi from '../components/seondCircle/SecondCircleUi';
import industrylead from '../Assets/Images/Icons/Industry-leaders.svg';
import Stateheads from '../Assets/Images/Icons/State-heads.svg'
import { Heading } from '../SubComponent/common/Heading';

// import '../app.scss' Stateheads industrylead

export const Verticla2 = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer =
            type === consts.PREV ? (
                <img
                    className={currentPageIndex == 0 ? "d-none left_arrow_image" : "left_arrow_image"}
                    src={arrowleft}
                />
            ) : (
                <img
                    className={currentPageIndex !== 4 ? "rigth_arrow_image" : "d-none rigth_arrow_image"}
                    src={arrowright}
                />
            );

        return (
            <>
                <button
                    onClick={onClick}
                    disabled={isEdge}
                    className={
                        type  != "NEXT"
                            ? " elastic-carousel__arrow rec-left "
                            : currentPageIndex ==0? "elastic-carousel__1stslidearrow rec-right ":"elastic-carousel__arrow rec-right"
                    }
                >
                    {pointer}
                </button>
            </>

        );
    };
    const [setclassforlist, setsetclassforlist] = useState("")



    const handleOnChange = (currentItem, pageIndex) => {
        setCurrentPageIndex(pageIndex);
    };







    const duration = 1000; // ms
    const delay = 500; // ms

    const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;
    const gotoRef = useRef(null);

    const goToSlide = (slideIndex) => {
        console.log("hello")
        gotoRef.current.goTo(slideIndex);
    };
   

    return (
        <>
            <div id="vert2_slide" className="styling-example">
                {/* <div className={currentPageIndex != 0 ? 'gototext Lato-300' : "d-none"}>
                    

                </div> */}
                
                <Carousel
                    ref={gotoRef}
                    // enableAutoPlay autoPlaySpeed={7000} 
                    className='vertical2-slide_main' renderArrow={myArrow} itemsToShow={1} onChange={handleOnChange}
                >
                    <div className='vertical2-slide d-flex flex-column '>

                        <div className='col-12'>
                            <div className='row d-flex first_vertical_slider_slide1 '>
                                <div className='col-md-7 col-lg-7 col-xl-7 col-12 '>
                                    <div className='verticalslide1Head col-12'>
                                        <p className={currentPageIndex == 0 ? "verticalslide1Head-text animate__animated animate__fadeInUp time1 BebasNeue font-70" : "verticalslide1Head-text d-none"} >
                                            BY DRIVING GREATER ADOPTION OF ‘THE <br /> MEDHA WAY’ WITH STATE GOVERNMENTS <br /> TO IMPACT MORE STUDENTS
                                        </p>
                                    </div>
                                    <div className='verticalslide1Head col-11'>
                                        <p className={currentPageIndex == 0 ? "verticalslide1Head-text-1 animate__animated animate__fadeInUp time2 Lato font-30" : "verticalslide1Head-text-1 d-none"} >Partnering with more <span className='greentext'>like-minded</span> state education departments,<br /> industry leaders, and peers will help us elevate the learning<br /> experience <span className='greentext'>and bring career opportunities youth care about to <br /> more than 100,000 students per year.</span>  Last year, we took steps to:</p>
                                    </div>
                                </div>
                                <div className='col-md-5 col-lg-5 col-xl-5 col-sm-12 '>
                                    <div className='vertical-slide1-img'>
                                        <img className={currentPageIndex == 0 ? "vert1-slide1-img animate__animated animate__fadeInRight " : "vert1-slide1-img d-none"} src={fab_uk} />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='vertical2-slide d-flex '>
                        <div className='col-12'>
                            <div className='row'>
                                <div className="col-md-12 col-lg-7 col-xl-7 col-12 ">
                                    <div className='vertical-slide2-img'>
                                        <img className={currentPageIndex == 1 ? 'vert1-slide2-img animate__animated animate__fadeIn ' : " vert1-slide2-img d-none"} src={fab_uk} />
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-5 col-xl-5 col-12'>
                                    <div className={currentPageIndex == 1 ? "verticalslide1Head_1 animate__animated animate__fadeInUp time1 BebasNeue" : "d-none"}>
                                        <p className='scaleknoledge font-50 Lato-700 col-12 '>Scale as a Knowledge Partner</p>
                                    </div>
                                    <div className={currentPageIndex == 1 ? "verticalslide1Head_1 animate__animated animate__fadeInUp time2 Lato        " : "d-none"}>
                                        <p className='residenseoursystem col--md-10 col-xl-10 col-lg-10 col-12 Lato font-30'>Redesigned our System Adoption team to be <br /> self-sufficient:</p>
                                    </div>

                                    <div className='verticalslide1Head3 col-10'>
                                        <ul className={currentPageIndex == 1 ? "list" : "d-none"} >
                                            <li className='marginstate animatedlisttext mt-5 mt-md-0 mt-lg-5 mt-xl-5 mt- d-flex Lato '>
                                                <span className='animatedlisticon'>
                                                    {/* <img className=' animatedlisticon2 mx-4' src={Stateheads} /> */}
                                                    <img className='animatedlisticon mx-4' src={proffesional} />

                                                </span>
                                                <span className='mt-2 font-30 Lato'>
                                                Seasoned professionals <br />leading 6 diverse verticals,

                                                </span>
                                            </li>
                                            <li className='marginstate animatedlisttext  mt-5 mt-md-0 mt-lg-5 mt-xl-5  d-flex  Lato '>
                                                <span className='animatedlisticon'>
                                                    <img className=' animatedlisticon2 mx-4' src={Stateheads} />

                                                </span>
                                                <span className='font-30 mt-2 Lato'>
                                                State heads overseeing project <br /> teams of experts and generalists,

                                                </span>

                                            </li>
                                            <li className='marginstate animatedlisttext  mt-md-0 mt-lg-5 mt-xl-5 mt-0  d-flex Lato'>
                                                <span className='animatedlisticon'>
                                                    {/* <img className=' animatedlisticon2 mx-4' src={Stateheads} /> */}
                                                    <img className='animatedlisticon  animatedlisticon3 mx-4 ' src={industrylead} />

                                                </span>
                                                <span className='font-30 mt-2 Lato'>
                                                An industry veteran <br />leading the team.

                                                </span>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div>
                        {currentPageIndex == 2 ? <FirstCircleUi className="vertical2-slide d-flex " /> : ""}
                    </div>

                    <div className='vertical2-slide d-flex justi'>
                        <div className='col-12 '>
                            
                            <div className=''>
                                {
                                    currentPageIndex == 3 ?
                                    <Heading 
                                    content_head_common={"content-head-1"}
                                    headclass={`position-fixed`}
                                HeadingText={`Transform higher education \n in Haryana`} 
                                paratext={`We completed the halfway mark in a 2-year venture with \n the Department of Higher Education, Haryana (DHE- \n Haryana) to prepare college students for meaningful work \n  roles. In this time, we:`}
                                />:""

                                }
                                
                            </div>

                            <div className='row'>

                                <div className="col-12 cards_3 d-flex justify-content-center">
                                    <div className="row   d-flex justify-content-center">
                                        <div className="col-xl-4 col-lg-4 col-md-12">
                                            <div className="border-0 h-100 mr-2">
                                                <img src={fab_uk} className={currentPageIndex == 3 ? "card-img-top small-image-vertical2 animate__animated animate__fadeInUp time3" : "card-img-top small-image-vertical2 d-none"} alt="..." />
                                                <div className="card-body">
                                                    {/* <h5 className="card-title fw-bold">Card title</h5> */}
                                                    <p className={currentPageIndex == 3 ? "card-text text-center card_3vert2_text animate__animated animate__fadeInUp time4 Lato font-30" : "card-text text-center card_3vert2_text d-none"}>
                                                        Provided hands-on coaching<br /> to 130 teachers and skill instructors
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12">
                                            <div className=" border-0 h-100 mx-2">
                                                <img src={fab_uk} className={currentPageIndex == 3 ? "card-img-top small-image-vertical2 animate__animated animate__fadeInUp time5" : "card-img-top small-image-vertical2 d-none"} alt="..." />
                                                <div className="card-body">
                                                    {/* <h5 className="card-title fw-bold">Card title</h5> */}
                                                    <p className={currentPageIndex == 3 ? "card-text text-center card_3vert2_text animate__animated animate__fadeInUp time6 Lato font-30" : "card-text text-center card_3vert2_text d-none"}>
                                                        Hosted career-focused webinars <br /> with employer partners
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12">
                                            <div className="border-0 h-100 ">
                                                <img src={fab_uk} className={currentPageIndex == 3 ? "card-img-top small-image-vertical2 animate__animated animate__fadeInUp time7" : "card-img-top small-image-vertical2 d-none"} alt="..." />
                                                <div className="card-body">
                                                    {/* <h5 className="card-title fw-bold">Card title</h5> */}
                                                    <p className={currentPageIndex == 3 ? "card-text text-center card_3vert2_text animate__animated animate__fadeInUp time8 Lato font-30" : "card-text text-center card_3vert2_text d-none"}>
                                                        Improved classroom learning <br /> experience and career exposure<br /> for ~3000 students
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>{currentPageIndex == 4 ? <SecondCircleUi /> : ""}</div>

                </Carousel>

                <button onClick={() => goToSlide(0)} className={currentPageIndex != 0 ? 'gototext Lato-300 pointer_class' : "d-none"} >
                        back to main slide
                </button>
            </div>

        </>
    )
}
