import React from 'react';
import manish from '../Assets/Images/Innvate_slide_hallabol_girl/Manish.jpg'

export const MobilePara = (props) => {

  return (
    <>

      <div >
        <div>
          <div dangerouslySetInnerHTML={{ __html: props.subject }} />
        </div>
        <div className=''>
            <img src={manish}/>
        </div>
      </div>



    </>
  )
}
