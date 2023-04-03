import React, { useEffect, useRef, useState } from 'react'
import { Para } from '../../Data/Para'
import { Stories } from '../../Data/Stories';
import swati_image1 from "../../Assets/Images/swati_medha_employee.png"
import swati_image from "../../Assets/Images/strength/Swati.png"
import sonali_image from "../../Assets/Images/strength/Sonali.png"

export const Slide3 = (props) => {
    const [subject,setsubject] = useState(props.subject)
    const [heading, setheading] = useState(props.head)
    const [employee, setemployee] = useState(props.emp)
    const [img,setImg]=useState(props.img)
    // const [magicName, setMagicName] = useState("“Read the stories that data tells.");
    // const intervalRef = useRef({});
    // const name = useTypeWriter(magicName, { typeSpeed: 50, delayMs: 1000, eraseOnComplete: false });

    useEffect(() => {
    //   if(props.img == "swati_img"){
    //     setImg(swati_image)
    //   }
    //   if(props.img == "sonali_img"){
    //     setImg(sonali_image)
    //   }
    }, [])
    
    return (
        <>

            <div className='col-12'>
                <div className='row'>
                    <div className='col-md-2 col-xl-2 col-lg-2 col-12 Lato'>
                        
                        <Stories head_class={props.headClass} empclass={props.empclass} headclass={props.headClass} index={props.index} className={props.className} sub={subject} head={heading} emp={employee}  />
                        
                    </div>
                    <div className='col-md-10 col-xl-10 col-lg-10 col-12 animate__animated animate__fadeIn time2'>
                        <img className='swati_image' src={img ? img : swati_image1}/>
                    </div>
                </div>
            </div>

        </>
    )
}
