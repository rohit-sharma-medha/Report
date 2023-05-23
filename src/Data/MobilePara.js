import React from 'react';
import manish from '../Assets/Images/Innvate_slide_hallabol_girl/Manish.jpg'
import kajal from '../Assets/Images/Innvate_slide_hallabol_girl/Kajal.jpg'

export const MobilePara = (props) => {
  let person=props.person
  return (
    <>

      <div className='d-flex flex-column'>
        <div>
          <div className='font-color' dangerouslySetInnerHTML={{ __html: props.subject }} />
        </div>
        <div className='flex-end'>
            <img className='manish_image' src={props.person == 'manish' ? manish:kajal}/>
        </div>
      </div>



    </>
  )
}
