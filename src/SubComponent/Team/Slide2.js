import React, { useRef, useState } from 'react';
import swati_image from "../../Assets/Images/swati_medha_employee.png";
import Carousel from 'react-grid-carousel'
import afzal from "../../Assets/Images/Team/Afzal.png";
import sanjul from "../../Assets/Images/Team/Sanjul.png";
import saurabh from "../../Assets/Images/Team/saurabh.png";
import KrithikaRam from "../../Assets/Images/Team/KrithikaRam.png";
import Bhawnaimg from '../../Assets/Images/Team/BhavnaJaisingh.png'


// import IndicatorDots from './indicator-dots'
// import Buttons from './buttons'

const MyDot = ({ isActive }) => (
    <span
        style={{
            display: 'inline-block',
            height: isActive ? '8px' : '5px',
            width: isActive ? '8px' : '5px',
            background: 'red'
        }}
    ></span>
)


export const Slide2 = () => {

//     const carouselRef = useRef(null);

//   const handlePageChange = () => {
//     const currentPageIndex = carouselRef.current.state.currentIndex;
//     console.log("currentPageIndex------------",currentPageIndex); // or update state variable
//   };

const [currentPageIndex, setCurrentPageIndex] = useState(0);

  
const turnToPage = (newPageIndex) => {
    setCurrentPageIndex(newPageIndex);
  };
    return (
        <>

            <div >

                <div className='row d-flex flex-cloumn '>
                    <div className='col-12 '>
                        <p className='team_slide2_heading_text text-center Lato-700'>Welcomed a brilliant <br />line of leadership</p>
                    </div>


                    <div className='container d-flex justify-content-between Team_capability_slider '>


                        <Carousel
                            responsiveLayout={[
                                {
                                    breakpoint: 1200,
                                    cols: 3
                                },
                                {
                                    breakpoint: 990,
                                    cols: 2
                                },
                                {
                                    breakpoint: 600,
                                    cols: 1
                                }
                            ]}
                            // ref={carouselRef}
                            onPageChange={turnToPage}
                            mobileBreakpoint={670}
                            cols={3} rows={1} gap={10} loop showDots dotColorActive={"#795548"}>


                            {<Carousel.Item>
                                <div className='child '>
                                    <img className='border-50 bhawna_image animate__animated animate__fadeInUp time1' src={Bhawnaimg} />
                                    <div className='vl animate__animated animate__fadeInUp time2'></div>
                                    <div className='team_slide2_1 animate__animated animate__fadeInUp time2' >
                                        <p className='team_slider2_paratext'>
                                            <span className='yellow-text'>Bhavna</span> has 12+ years of experience working across places like the World Bank and the Indian Ministry of Finance. A student of public policy, economics, and Bharatanatyam, she believes art is essential for thriving in life.
                                        </p>
                                    </div>
                                </div>



                            </Carousel.Item>}
                            {<Carousel.Item>
                                <div className='child2'>
                                    <img className='border-50 animate__animated animate__fadeInUp time3' src={KrithikaRam} />
                                    <div className='vl1 animate__animated animate__fadeInUp time4'></div>
                                    <div className='team_slide2_1 animate__animated animate__fadeInUp time4' >
                                        <p className='team_slider2_paratext'>
                                            With over 15+ years of leadership<br /> experience,<span className='yellow-text'>Krithika</span>  has directed pan-India programs, led CSR strategies, and built an influential voice on LinkedIn. You can trust her to distill clarity from chaos with a smile.
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>}
                            {<Carousel.Item>
                                <div className='child3'>
                                    <img className='border-50 animate__animated animate__fadeInUp time5' src={saurabh}/>
                                    <div className='vl animate__animated animate__fadeInUp time6'></div>
                                    <div className='team_slide2_1 animate__animated animate__fadeInUp time6' >
                                        <p className='team_slider2_paratext'>
                                            <span className='yellow-text'>Saurabh </span>
                                            has engaged multiple state governments at places like the Azim Premji, Piramal, and Agha Khan Foundation in the last 17 years. He loves experimenting with food in his kitchen when not strategizing for scale!
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>}
                            <Carousel.Item>
                                <div className='child4'>
                                    <img className='border-50 animate__animated animate__fadeInUp time7' src={sanjul} />
                                    <div className='vl animate__animated animate__fadeInUp time8'></div>
                                    <div className='team_slide2_1 animate__animated animate__fadeInUp time8' >
                                        <p className='team_slider2_paratext'>
                                            With 13+ years of cross-functional experience in corporates and non-profits, Sanjul is an operations and strategy expert. A student of various subjects from engineering to Vipassana, he's also a much-loved life coach.
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            {<Carousel.Item>
                                <div className='child5'>
                                    <img className='border-50 animate__animated animate__fadeInUp time2' src={afzal} />
                                    <div className='vl'></div>
                                    <div className='team_slide2_1' >
                                        <p className='team_slider2_paratext'>
                                            <span className='yellow-text'>Afzal </span>
                                            has built his expertise in financial accounting, analysis, and audit in the last 16 years, working at places like Oxfam and Pratham. You can trust him to catch tiny but mighty details with quiet composure!
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>
}





                        </Carousel>
                        {/* <p>Current page index: {currentPageIndex}</p> */}
                    </div>
                </div>
            </div>

        </>
    )
}
