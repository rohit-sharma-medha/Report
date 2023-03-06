import React,{Fragment,useEffect,useState,useRef} from 'react';
import {ReactComponent as MySVG} from '../../assets/Ellipse.svg';


import './SecondCircle.css';


const SecondCircleUi = function SecondCircleUi() {

    const addAnimation = ()=>{
        const elementIdList = ['fBubble','sBubble','thBubble','foBubble'];

        setTimeout(()=>{
            document.getElementById(elementIdList[0]).style.animation = "fadeIn 2s forwards"

        },1000)

        setTimeout(()=>{
            document.getElementById(elementIdList[1]).style.animation = "fadeIn 2s forwards"

        },3000)
        setTimeout(()=>{
            document.getElementById(elementIdList[2]).style.animation = "fadeIn 2s forwards"

        },5000)
        setTimeout(()=>{
            document.getElementById(elementIdList[3]).style.animation = "fadeIn 2s forwards"

        },7000)


        setTimeout(()=>{
            document.getElementById('ellip_svg').style.animation = "fadeInFromBottom 2s forwards"
        },9000)


    }

    useEffect(()=>{
        addAnimation()

    },[])




  return (
    <Fragment>

        <div className='container'>
            <div className='row'>
               <div className='col-12'>
                    <div className='row align-items-center'>
                        <div className='col-6 main_heading'>
                        Elevate on-the-job vocational training in Haryana
                        </div>
                        <div className='col-6 headingPara'>
                        Over the next 2 years, we will help the Skill Development and Industrial Training Department, Haryana (SDIT-Haryana) scale their dual-system of training model for vocational education students by:
                        </div>
                    </div>
               </div>

            </div>

     

     <div className='row justify-content-center'>
        <MySVG className="img-fluid ellipse-svg" id='ellip_svg'/>

        <div className='row'>
            <div className='col-12'>
                <div className='row justify-content-center'>
                    <div className='col-4 second_grayed_bubble' id='sBubble'>
                        Building strong industry partnerships for quality OJTs
                    </div>

                </div>
                <div className='row justify-content-between' >
                    <div className='col-4 second_grayed_bubble' id='fBubble'>
                    Providing on-the-job trainings (OJT) of 6 months’ duration

                    </div>
                    <div className='col-4 second_grayed_bubble' id='thBubble'>
                    Doubling the number of OJT units in the state
                    </div>

                </div>

                <div className='row'>
                    <div className='col-6 semi-circle d-flex flex-column justify-content-center' id='foBubble'>
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
        
        </Fragment>
  )
}

export default SecondCircleUi;