import React, { useEffect, useRef, useState } from 'react'
import Carousel, { consts } from 'react-elastic-carousel'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
// import AnimatedText from 'react-animated-text-content';
import arrowleft from '../Assets/Images/Arrow_left_black.png'
import arrowright from '../Assets/Images/arrow_right_black.png'


let resetTimeout;
let totalPages = 4;
const Vertical_slider = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const carouselRef = useRef(null);
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <img className={currentPageIndex == 0 ? "d-none" : "position_middle_left"} src={arrowleft} /> : <img className={"position_middle_right"} src={arrowright} />
        return (
            <button onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    const handleOnChange = (currentItem, pageIndex) => {
        setCurrentPageIndex(pageIndex);
    };


    return (
        <>
            <Carousel renderArrow={myArrow} onChange={handleOnChange} >
                <div className='mt-5'>
                    <p className={currentPageIndex == 0 ? "mt-5 mt-7 text-center vert_cards_text animate__animated animate__fadeInUp    " : "text-center vert_cards_text"}>
                        IN 2021, WE SET AN AUDACIOUS GOAL OF HELPING <span className='yellow-text'>1 MILLION <br /> YOUTH</span> TRANSFORM THEIR LIVES IN THE NEXT 5 YEARS
                    </p>
                </div>
                <div className='d-flex align-item-center justify-content-center mt-7'>
                    <p className={currentPageIndex == 1 ? "mt-4 text-center vert_cards_text vert_cards_text_lato animate__animated animate__fadeInUp " : "mt-5 text-center vert_cards_text vert_cards_text_lato"} >
                        1 million is not a random number
                    </p>
                </div>
                <div className=''>

                    <p className={currentPageIndex == 2 ? `mt-7 text-center vert_cards_text vert_cards_text_lato vert_cards_text_3rd mt-5 animate__animated animate__fadeInUp` : "text-center vert_cards_text vert_cards_text_lato vert_cards_text_3rd"}>

                        It represents 10 % of the estimated 9 million college-going <br /> students in India’s Hindi-speaking belt and serves as a <br /><span className='yellow-text'> tipping point </span>  for driving significant social change.

                    </p>
                </div>

                <div className='my-5'>

                    <p className={currentPageIndex == 3 ? `text-center vert_cards_text  animate__animated animate__bounce animate__fadeInUp` : "vert_cards_text"}>
                        How will we <span className='yellow-text'>40X our impact</span>  since 2011?
                    </p>
                    <div className='d-flex justify-content-around d-flex flex-column   flex-md-column  flex-lg-row '>
                        <div className={currentPageIndex == 3 ? `circle mx-5 animate__animated  animate__fadeInLeft time1 ` : "circle mx-5"}>By driving greater adoption of ‘the Medha way’ at scale</div>
                        <div className={currentPageIndex == 3 ? `circle mx-5 my-2 animate__animated  animate__fadeInLeft time2` : "circle mx-5 my-2"}>Remaining quality-driven in our direct student engagement</div>
                        <div className={currentPageIndex == 3 ? `circle mx-5 animate__animated  animate__fadeInLeft time3` : "circle mx-5"}>And committing to data-driven decision-making at work</div>
                    </div>
                </div>
            </Carousel>

        </>
    )
}

export default Vertical_slider







// const [activeSection, setActiveSection] = React.useState(0);
// const sliderRef = React.useRef(null);

// const main_vert_slide_class = useRef(null)
// const [pageNo, setpageNo] = useState(0)
// const settings = {
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     speed: 500,
//     // fade: true,
//     lazyLoad: true,
//     autoplay: false,
//     beforeChange: (oldIndex, newIndex) => {
//         console.log(newIndex)

//     }

// };

// const [ClassAdded, setClaaAdded] = useState("")

// const slider = useRef(null);

// function scroll(e) {
//     if (slider === null)
//         return 0;

//     e.wheelDelta < 0 ? (
//         slider.current.slickNext()
//     ) : (
//         slider.current.slickPrev()
//     );

//     if (e.wheelDelta < 0) {
//         setClaaAdded("animate__animated  animate__bounceIn")
//     }

// };

// useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('Vertical_slider');
//                 // entry.target.classList.add('main_3rd_slide')
//             }
//         });
//     });
//     // observer.observe(mainCardId.)
//     observer.observe(main_vert_slide_class.current);


//     return () => {

//         observer.unobserve(main_vert_slide_class.current);

//     };
// }, []);

// useEffect(() => {

//     window.addEventListener("wheel", scroll, true);

//     return () => {
//         window.removeEventListener("wheel", scroll, true);
//     };
// }, []);


// const handleProgress = (origin, destination, direction) => {
//     setActiveSection(destination.index);
//     // go to the first slide when the user enters the carousel section
//     if (destination.index === 2) {
//         sliderRef.current.slickGoTo(0);
//     }
// };

// return (
// <>
{/* <div ref={main_vert_slide_class} id="Vert_slide_1" className='container-fluid backgournd-faded' >
                <Row className='vertical-slider1'>
                    <Col>

                        <Slider {...settings} ref={slider} className='vertical_slick_slider d-flex justify-content-center align-item-center'>

                            <div className='card-middle col-12'>
                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex  align-items-center justify-content-center '>

                                        <Card.Text className={`col-9 text-center vert_cards_text ${ClassAdded}`}>
                                            IN 2021, WE SET AN AUDACIOUS GOAL OF HELPING <span className='yellow-text'>1 MILLION <br /> YOUTH</span> TRANSFORM THEIR LIVES IN THE NEXT 5 YEARS
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>

                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex  align-items-center justify-content-center '>

                                        <Card.Text className={`col-9 text-center vert_cards_text vert_cards_text_lato ${ClassAdded}`} >
                                            1 million is not a random number
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex  align-items-center justify-content-center '>

                                        <Card.Text className={`col-9 text-center vert_cards_text vert_cards_text_lato vert_cards_text_3rd ${ClassAdded}`}>

                                            It represents 10 % of the estimated 9 million college-going <br /> students in India’s Hindi-speaking belt and serves as a <br /><span className='yellow-text'> tipping point </span>  for driving significant social change.

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>


                            <div>
                                <Card className="card-design-fabuk card-design-fabuk_1  card-design ">

                                    <Card.Body className='d-flex flex-column  align-items-center justify-content-center '>

                                        <Card.Text className='col-9 text-center vert_cards_text  animate__animated animate__bounce animate__bounceIn'>
                                            How will we <span className='yellow-text'>40X our impact</span>  since 2011?
                                        </Card.Text>
                                        <div className='d-flex justify-content-around d-flex flex-column   flex-md-column  flex-lg-row '>
                                            <div className="circle mx-5">By driving greater adoption of ‘the Medha way’ at scale</div>
                                            <div className="circle mx-5 my-2">Remaining quality-driven in our direct student engagement</div>
                                            <div className="circle mx-5">And committing to data-driven decision-making at work</div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>

                        </Slider>
                    </Col>
                </Row>

            </div> */}



{/* </> */ }
{/* ) */ }
