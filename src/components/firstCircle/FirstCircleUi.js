import React,{Fragment,useEffect} from 'react';
import {ReactComponent as MySVG} from '../../Assets/Images/CircleGreen.svg';


import './FirstCircle.css';


const FirstCircleUi = function FirstCircleUi() {

    const addAnimation = ()=>{
        const elementIdList = ['firstBubble','SecondBubble','thirdBubble','fourthBubble','fifthBubble','sixthBubble'];

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
            document.getElementById(elementIdList[4]).style.animation = "fadeIn 2s forwards"

        },9000)
        setTimeout(()=>{
            document.getElementById(elementIdList[5]).style.animation = "fadeInFromBottom 2s forwards"

        },11000)

        setTimeout(()=>{
            document.getElementById('svg').style.animation = "fadeInFromBottom 2s forwards"
        },13000)


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
                        Make vocational education aspirational in UP
                        </div>
                        <div className='col-6 headingPara'>
                        We renewed our 8-year-old partnership with the Department of Technical Education, Uttar Pradesh (DTE-UP) to strengthen polytechnic education, by:
                        </div>
                    </div>
               </div>

            </div>

     

     <div>
        <MySVG className="img-fluid arrow-svg" id="svg"/>
        <div className='row'>
                <div className='col-12'>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-4 grayed_bubble' id='thirdBubble'>
                        Improving the physical learning facilities,
                        </div>
                    </div>

                    <div className='row justify-content-around mb-5' style={{width:'83rem'}}>
                        <div className='col-4 grayed_bubble' id='SecondBubble'>
                        Introducing an industry-relevant curriculum,
                        </div>
                        <div className='col-4 grayed_bubble' id='fourthBubble'>
                        Helping industry and academia work closely
                        </div>
                    </div>

                    <div>
                        <div className='row justify-content-around' style={{width:'85rem'}}>
                            <div className={`col-4 grayed_bubble`} id="firstBubble">
                            Building experiential facilitation skill in teachers,

                            </div>
                            
                            <div className='col-4 orange_bubble' id='sixthBubble'>
                            Potentially impact 70,000+ young people
                            </div>
                            <div className='col-4 grayed_bubble' id='fifthBubble'>
                            Driving data-backed governance in the system
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

export default FirstCircleUi;