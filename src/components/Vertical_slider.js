import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import AnimatedText from 'react-animated-text-content';
import "../Style/slick.css"


const Vertical_slider = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        // fade: true,
        lazyLoad: true,
        autoplay: false,
        
    };

    const [ClassAdded, setClaaAdded] = useState("")

    const slider = useRef(null);

    function scroll(e) {
        if (slider === null)
            return 0;

        e.wheelDelta < 0 ? (
            slider.current.slickNext()
        ) : (
            slider.current.slickPrev()
        );

        if (e.wheelDelta < 0) {
            setClaaAdded("animate__animated animate__bounce animate__bounceIn")
        }

    };

    useEffect(() => {

        window.addEventListener("wheel", scroll, true);

        return () => {
            window.removeEventListener("wheel", scroll, true);
        };
    }, []);

    // useEffect(() => {
    //     let slickListDiv = document.getElementsByClassName('slick-list')[0]
    //     slickListDiv.addEventListener('wheel', event => {
    //       event.preventDefault()
    //       event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
    //     })
    // }, [])

    return (
        <>
            <div id="Vert_slide_1" className='container-fluid backgournd-faded' >
                <Row className='vertical-slider1'>
                    <Col>

                        <Slider {...settings} ref={slider} className='vertical_slick_slider d-flex justify-content-center align-item-center'>

                            <div className='card-middle col-12'>
                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex  align-items-center justify-content-center '>

                                        <Card.Text className={`col-9 text-center cards-text ${ClassAdded}`}>
                                            In 2021, we set an audacious goal of helping 1 million youth transform their lives in the next 5 years
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>

                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex  align-items-center justify-content-center '>

                                        <Card.Text className={`col-9 text-center cards-text ${ClassAdded}`} >
                                            1 million is not a random number                                        
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex  align-items-center justify-content-center '>

                                        <Card.Text className={`col-9 text-center cards-text ${ClassAdded}`}>

                                        It represents 10 % of the estimated 9 million college-going students in India’s Hindi-speaking belt and serves as a tipping point for driving significant social change.

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>


                            <div>
                                <Card className="card-design-fabuk card-design ">

                                    <Card.Body className='d-flex flex-column  align-items-center justify-content-center '>

                                        <Card.Text className='col-9 text-center cards-text animate__animated animate__bounce animate__bounceIn'>
                                            How will we 40X our impact since 2011?
                                        </Card.Text>
                                        <div className='d-flex justify-content-around '>
                                            <div className="circle mx-5">By driving greater adoption of ‘the Medha way’ at scale</div>
                                            <div className="circle mx-5">Remaining quality-driven in our direct student engagement</div>
                                            <div className="circle mx-5">And committing to data-driven decision-making at work</div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>

                        </Slider>
                    </Col>
                </Row>

            </div>



        </>
    )
}

export default Vertical_slider