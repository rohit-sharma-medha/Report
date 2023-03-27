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

// import '../app.scss'

export const Verticla2 = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const myArrow=({ type, onClick, isEdge })=> {
        const pointer = type === consts.PREV ? <img className={currentPageIndex == 0 ?"d-none":"position_middle_left"} src={arrowleft}/> : <img className={ currentPageIndex !==4 ? "position_middle_right":"d-none"} src={arrowright}/>
        return (
          <button onClick={onClick} disabled={isEdge}>
            {pointer}
          </button>
        )
      }
    const [setclassforlist, setsetclassforlist] = useState("")
    

  
    const handleOnChange = (currentItem, pageIndex) => {
        setCurrentPageIndex(pageIndex);
    };





   

    const duration = 1000; // ms
    const delay = 500; // ms

    const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;



    return (
        <>
            <div id="vert2_slide" className="styling-example">
                <Carousel 
                // enableAutoPlay autoPlaySpeed={7000} 
                className='vertical2-slide_main' renderArrow={myArrow} itemsToShow={1} onChange={handleOnChange}>
                    <div className='vertical2-slide d-flex justi'>

                        <div className='col-12'>
                            <div className='row d-flex first_vertical_slider_slide1 '>
                                <div className='col-md-7 col-lg-7 col-xl-7 col-12 '>
                                    <div className='verticalslide1Head col-12'>
                                        <p className={currentPageIndex == 0 ? "verticalslide1Head-text animate__animated animate__fadeInUp time1 BebasNeue" : "verticalslide1Head-text d-none"} >
                                            BY DRIVING GREATER ADOPTION OF ‘THE <br /> MEDHA WAY’ WITH STATE GOVERNMENTS <br /> TO IMPACT MORE STUDENTS
                                        </p>
                                    </div>
                                    <div className='verticalslide1Head col-11'>
                                        <p className={currentPageIndex == 0 ? "verticalslide1Head-text-1 animate__animated animate__fadeInUp time2 Lato" : "verticalslide1Head-text-1 d-none"} >Partnering with more <span className='greentext'>like-minded</span> state education departments,<br /> industry leaders, and peers will help us elevate the learning<br /> experience <span className='greentext'>and bring career opportunities youth care about to <br /> more than 100,000 students per year.</span>  Last year, we took steps to:</p>
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
                                <div className='col-md-12 col-lg-7 col-xl-7 col-12'>
                                    <div className='vertical-slide2-img'>
                                        <img className={currentPageIndex == 1 ? 'vert1-slide2-img animate__animated animate__fadeIn ':" vert1-slide2-img d-none" } src={fab_uk} />
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-5 col-xl-5 col-12'>
                                    <div className={currentPageIndex == 1 ? "verticalslide1Head_1 animate__animated animate__fadeInUp time1 BebasNeue" : "d-none"}>
                                        <p className='scaleknoledge'>Scale as a Knowledge Partner</p>
                                    </div>
                                    <div className={currentPageIndex == 1 ? "verticalslide1Head_1 animate__animated animate__fadeInUp time2 Lato        " : "d-none"}>
                                        <p className='residenseoursystem col-10'>Redesigned our System Adoption team to be <br/> self-sufficient:</p>
                                    </div>

                                    <div className='verticalslide1Head3 col-10'>
                                        <ul className={currentPageIndex == 1 ? "list" : "d-none"} >
                                            <li className='marginstate animatedlisttext mt-5 d-flex Lato'>
                                                <img className='animatedlisticon mx-4' src={proffesional} />

                                                Seasoned professionals <br />leading 6 diverse verticals,
                                            </li>
                                            <li className='marginstate animatedlisttext  mt-5  d-flex  Lato '>
                                                <img className='animatedlisticon mx-4' src={Xicon} />

                                                State heads overseeing project <br /> teams of experts and generalists,
                                            </li>
                                            <li className='marginstate animatedlisttext  mt-5  d-flex Lato'>
                                                <img className='animatedlisticon mx-4 ' src={veteran} />

                                                An industry veteran <br />leading the team.
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='vertical2-slide d-flex justi'>
                        <div className='col-12 '>
                            <div className='row d-flex upper-content-3rdslide'>
                                <div className={currentPageIndex == 2 ? "col-md-12 col-xl-5 col-lg-5 col-12 animate__animated animate__fadeInUp time1 " : "col-md-5 col-xl-5 col-lg-5 col-12 d-none"} >
                                    <p className='uppercontent-head Lato-700'>Transform higher education <br/> in Haryana</p>
                                </div>
                                <div className={currentPageIndex == 2 ? "col-md-12 col-xl-7 col-lg-7 col-12 animate__animated animate__fadeInUp time2" : "col-md-7 col-xl-7 col-lg-7 col-12 d-none"} >
                                    <p className='uppercontent-text Lato'>We completed the halfway mark in a 2-year venture with<br /> the Department of Higher Education, Haryana (DHE- <br />Haryana) to prepare college students for meaningful work <br /> roles. In this time, we:</p>
                                </div>
                            </div>

                            <div className='row'>
                                
                                <div className="col-12 cards_3 d-flex justify-content-center">
                                    <div className="row   d-flex justify-content-center">
                                        <div className="col-xl-4 col-lg-4 col-md-12">
                                            <div className="border-0 h-100 mr-2">
                                                <img src={fab_uk} className={currentPageIndex == 2 ? "card-img-top small-image-vertical2 animate__animated animate__fadeInUp time3" : "card-img-top small-image-vertical2 d-none"} alt="..." />
                                                <div className="card-body">
                                                    {/* <h5 className="card-title fw-bold">Card title</h5> */}
                                                    <p className={currentPageIndex == 2 ?"card-text text-center card_3vert2_text animate__animated animate__fadeInUp time4 Lato":"card-text text-center card_3vert2_text d-none"}>
                                                    Provided hands-on coaching<br/> to 130 teachers and skill instructors
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12">
                                            <div className=" border-0 h-100 mx-2">
                                                <img src={fab_uk} className={currentPageIndex == 2 ?"card-img-top small-image-vertical2 animate__animated animate__fadeInUp time5":"card-img-top small-image-vertical2 d-none"} alt="..." />
                                                <div className="card-body">
                                                    {/* <h5 className="card-title fw-bold">Card title</h5> */}
                                                    <p className={currentPageIndex == 2 ?"card-text text-center card_3vert2_text animate__animated animate__fadeInUp time6 Lato":"card-text text-center card_3vert2_text d-none"}>
                                                    Hosted career-focused webinars <br/> with employer partners
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12">
                                            <div className="border-0 h-100 ">
                                                <img src={fab_uk} className={currentPageIndex == 2 ? "card-img-top small-image-vertical2 animate__animated animate__fadeInUp time7":"card-img-top small-image-vertical2 d-none"} alt="..." />
                                                <div className="card-body">
                                                    {/* <h5 className="card-title fw-bold">Card title</h5> */}
                                                    <p className={currentPageIndex == 2 ?"card-text text-center card_3vert2_text animate__animated animate__fadeInUp time8 Lato":"card-text text-center card_3vert2_text d-none"}>
                                                    Improved classroom learning <br/> experience and career exposure<br/> for ~3000 students
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {currentPageIndex ==3 ?  <FirstCircleUi className="vertical2-slide d-flex "/>:""}
                    </div>

                    <div>{currentPageIndex ==4 ? <SecondCircleUi/>: ""}</div>
                
                </Carousel>
            </div>

        </>
    )
}
