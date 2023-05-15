import React from 'react'

export const Heading = (props) => {
  return (
    <>
    
        <div className={`${props.content_head_common }`}>
            <div className={`col-12 d-flex justify-content-between  ${props.headclass ?props.headclass:""}`}>
                <div className='col-md-6 col-xl-6 col-lg-6 col-12 mt-4 animate__animated animate__fadeInUp time1 no-margin'>
                    <div className={`  ${props.content_head_common ?props.content_head_common:""}`}>
                        <p className='Lato-700 font-50 new-line'>{props.HeadingText}</p>
                    </div>
                </div>
                <div className='col-md-6 col-xl-6 col-lg-6 col-12  mt-3  animate__animated animate__fadeInUp time2'>
                    <div className={`content-para-1 ${props.paraclass?props.paraclass:""}`}>
                        <p className='Lato font-30 new-line'>{props.paratext}</p>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}
