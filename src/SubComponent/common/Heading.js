import React from 'react'
import { Head_Subhead } from '../../Data/head_Subhead'

export const Heading = (props) => {
  return (
    <>
    
        <div className={`${props.content_head_common }   Heading_common`}>
            <div className={`col-12 d-flex flex-column  flex-lg-row flex-xl-row justify-content-between  ${props.headclass ?props.headclass:""} slide-section_heading`}>
                <div className='col-md-12 col-xl-6 col-lg-6 col-12 mt-4 animate__animated animate__fadeInUp time1 no-margin'>
                    <div className={`  ${props.content_head_common ?props.content_head_common:""}`}>
                        <p className='Lato-700 font-50 new-line font-color'>{props.HeadingText}</p>
                    </div>
                </div>
                <div className='col-md-12 col-xl-6 col-lg-6 col-12  mt-3  animate__animated animate__fadeInUp time2'>
                    <div className={`content-para-1 ${props.paraclass?props.paraclass:""}`}>
                        <p className='Lato font-30 new-line font-color'>{props.paratext}</p>
                    </div>
                </div>
            </div>
        </div>
    
    {/* <Head_Subhead /> */}
    </>
  )
}
