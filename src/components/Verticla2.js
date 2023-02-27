import React, { useEffect, useRef, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel'
import { items } from '../Data/items'
// import '../app.scss'

export const Verticla2 = () => {

    //    function myArrow({ type, onClick, isEdge }) {
    //         const pointer = type === consts.PREV ? '👈' : '👉'
    //         return (
    //           <button onClick={onClick} disabled={isEdge}>
    //             {pointer}
    //           </button>
    //         )
    // renderArrow={myArrow}
    //     }
    const [setclassforlist, setsetclassforlist] = useState("")
    // const elementRef1 = useRef(null);
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           entry.target.classList.add('list');
    //         }
    //       });
    //     });

    //     observer.observe(elementRef1.current);

    //     return () => {
    //       observer.unobserve(elementRef1.current);
    //     };
    //   }, []);

    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const handleOnChange = (currentItem, pageIndex) => {
        setCurrentPageIndex(pageIndex);
    };





    const SomeComponent = ({ item }) => (
        <div className="item-content">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
        </div>
    );

    const duration = 1000; // ms
    const delay = 500; // ms

    const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;



    return (
        <>

            {/* <Carousel className='vertical2-slide-content' verticalMode itemsToShow={1}>


            </Carousel> */}


            <div id="vert2_slide" className="styling-example">
                <Carousel className='vertical2-slide_main' itemsToShow={1} onChange={handleOnChange}>
                    <div className='vertical2-slide d-flex justi'>

                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-7'>
                                    <div className='verticalslide1Head col-12'>
                                        <p className='verticalslide1Head-text'>By driving greater adoption of ‘the Medha way’ with state governments <br />to impact more students</p>
                                    </div>
                                    <div className='verticalslide1Head col-11'>
                                        <p className='verticalslide1Head-text-1'>Partnering with more <span className='greentext'>like-minded</span> state education departments,<br /> industry leaders, and peers will help us elevate the learning<br /> experience <span className='greentext'>and bring career opportunities youth care about to <br /> more than 100,000 students per year.</span>  Last year, we took steps to:</p>
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className='vertical-slide1-img'>
                                        <img className='vert1-slide1-img animate__animated animate__zoomInDown' src='https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='vertical2-slide d-flex '>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-7'>
                                    <div className='vertical-slide1-img'>
                                        <img className='vert1-slide2-img ' src='https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432' />
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div  className={currentPageIndex == 1 ? "verticalslide1Head animate__animated animate__fadeInDown" : ""}>
                                        <p className='scaleknoledge'>Scale as a Knowledge Partner</p>
                                    </div>
                                    <div className={currentPageIndex == 1 ? "verticalslide1Head animate__animated animate__flipInX" : ""}>
                                        <p className='residenseoursystem col-10'>Redesigned our System Adoption team to be self-sufficient:</p>
                                    </div>

                                    <div className='verticalslide1Head3 col-10'>
                                        <ul className={currentPageIndex == 1 ? "list" : ""} >
                                            <li className=' animatedlisttext mt-5 d-flex justify-content-around'>
                                                <div className='animated-icon-text'><img className='animatedlisticon' src='https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432' /></div>

                                                <div className=''> Seasoned professionals <br />leading 6 diverse verticals,</div>
                                            </li>
                                            <li className='marginstate animatedlisttext  mt-5  d-flex justify-content-around'>
                                                <div className='animated-icon-text '><img className='animatedlisticon' src='https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432' /></div>

                                                <div className='ml-5'> State heads overseeing project <br /> teams of experts and generalists,</div>
                                            </li>
                                            <li className='marginstate animatedlisttext  mt-5  d-flex justify-content-around'>
                                                <div className='animated-icon-text '><img className='animatedlisticon' src='https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432' /></div>

                                                <div className='ml-2'> An industry veteran leading the team.</div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='vertical2-slide d-flex justi'>
                        <div className='col-12 '>
                            <div className='row upper-content-3rdslide'>
                                <div className={currentPageIndex == 2 ? "col-5" : ""} >
                                    <p className='uppercontent-head'>Transform higher education in Haryana</p>
                                </div>
                                <div className='col-6 mx-5'>
                                    <p className='uppercontent-text'>We completed the halfway mark in a 2-year venture with the Department of Higher Education, Haryana (DHE-Haryana) to prepare college students for meaningful work roles. In this time, we:</p>
                                </div>
                            </div>

                            <div className='row d-flex align-items-end justify-content-between '>
                                <ul className={currentPageIndex == 2 ? "item-list item-list123" : ""}>
                                    {items.map((item, i) => (

                                        <li className={currentPageIndex == 2 ? "item-list121 col-4" : ""} key={i} style={{ animation: animStr(i) }}>
                                            <img src='https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432' className='small-image-vertical2' />
                                            <SomeComponent item={item} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='vertical2-slide d-flex '>
                        <div className='col-12'>
                            <div className='row upper-content-3rdslide'>
                                <div className='col-5'>
                                    <p className='uppercontent-head'>Make vocational education aspirational in UP</p>
                                </div>
                                <div className='col-6 mx-5'>
                                    <p className='uppercontent-text'>We renewed our 8-year-old partnership with the Department of Technical Education, Uttar Pradesh (DTE-UP) to strengthen polytechnic education, by:</p>
                                </div>
                            </div>
                            <div className="semi-circle"></div>
                            <div className='col-12 half-circle-animation'>
                                <div className='row first-line-content'>
                                    <div className='col-12 d-flex justify-content-center first-line-content-box'>
                                        <p className='first-line-content-box-text'>Improving the physical learning facilities,</p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-between second-line-content'>

                                    <div className='col-4 px-5'>
                                        <p className='first-line-content-box-text'>Introducing an industry-relevant curriculum,</p>
                                    </div>
                                    <div className='col-4 px-5'>
                                        <p className='first-line-content-box-text' >Helping industry and academia work closely</p>
                                    </div>


                                </div>
                                <div className='row d-flex justify-content-around third-line-content'>
                                    <div className='col-4'>
                                        <p className='first-line-content-box-text'>Building experiential facilitation skill in teachers,</p>
                                    </div>
                                    <div className='col-4'>
                                        <p className='first-line-content-box-text yellowbackground'>Potentially impact 70,000+ young people</p>
                                    </div>
                                    <div className='col-4'>
                                        <p className='first-line-content-box-text'>Driving data-backed governance in the system</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='vertical2-slide d-flex '>

                        <div className='col-12'>
                            <div className='row upper-content-3rdslide'>
                                <div className='col-5'>
                                    <p className='uppercontent-head'>Elevate on-the-job vocational training in Haryana</p>
                                </div>
                                <div className='col-6 mx-5'>
                                    <p className='uppercontent-text'>Over the next 2 years, we will help the Skill <br/> Development and Industrial Training Department,<br/> Haryana (SDIT-Haryana) scale their dual-system of <br/> training model for vocational education students by:</p>
                                </div>
                            </div>
                            <div className="semi-circle1"></div>
                            <div className='col-12 half-circle-animation'>
                                <div className='row first-line-content'>
                                    <div className='col-12 d-flex justify-content-center first-line-content-box'>
                                        <p className='first-line-content-box-text'>Building strong industry partnerships for quality OJTs</p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-between second-line-content'>

                                    <div className='col-4 px-5'>
                                        <p className='first-line-content-circle-text'>Providing on-the-job trainings (OJT) of 6 months’ duration</p>
                                    </div>
                                    <div className='col-4 px-5'>
                                        <p className='first-line-content-box-text' >Doubling the number of OJT units in the state</p>
                                    </div>


                                </div>
                                <div className='row d-flex flex-column potential'>
                                    <p className='potential-text '>Potentially impacting</p>
                                    <p className='potential-text yellow-text'>XXXX</p>
                                    <p className='potential-text '>of students</p>
                                </div>
                                <div className='row d-flex justify-content-around third-line-content'>
                                   
                                    <div className='col-4'>
                                        <p className='greenbackgraound'></p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='vertical2-slide d-flex justi'>6</div>
                </Carousel>
            </div>

        </>
    )
}
