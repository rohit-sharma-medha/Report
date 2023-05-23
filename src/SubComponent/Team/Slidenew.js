import React from 'react';
import afzal from "../../Assets/Images/Team/Afzal.png";
import sanjul from "../../Assets/Images/Team/Sanjul.png";

export const Slidenew = () => {
    return (
        <>


            <div >

                <div className='row d-flex flex-cloumn '>
                    <div className='col-12 '>
                        <p className='team_slide2_heading_text text-center Lato-700'>Welcomed a brilliant <br />line of leadership</p>
                    </div>


                    <div className=' d-flex justify-content-around  '>


                        {/* <Carousel
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
                



            </Carousel.Item>}
            {<Carousel.Item>
                
            </Carousel.Item>}
            {<Carousel.Item>
                
            </Carousel.Item>}
            <Carousel.Item>
                
            </Carousel.Item>
            {<Carousel.Item>
                
            </Carousel.Item>
}





        </Carousel> */}

                        <div className='child4'>
                            <img className='border-50 animate__animated animate__fadeInUp time1' src={sanjul} />
                            <div className='vl animate__animated animate__fadeInUp time2'></div>
                            <div className='team_slide2_1 animate__animated animate__fadeInUp time2' >
                                <p className='team_slider2_paratext font-color'>
                                    With 13+ years of cross-functional experience in corporates and non-profits, Sanjul is an operations and strategy expert. A student of various subjects from engineering to Vipassana, he's also a much-loved life coach.
                                </p>
                            </div>
                        </div>
                        <div className='child5'>
                            <img className='border-50 animate__animated animate__fadeInUp time3' src={afzal} />
                            <div className='vl animate__animated animate__fadeInUp time4'></div>
                            <div className='team_slide2_1 animate__animated animate__fadeInUp time4' >
                                <p className='team_slider2_paratext font-color'>
                                    <span className='yellow-text'>Afzal </span>
                                    has built his expertise in financial accounting, analysis, and audit in the last 16 years, working at places like Oxfam and Pratham. You can trust him to catch tiny but mighty details with quiet composure!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>



    )
}
