import React from 'react'
import Shubhra from "../../Assets/Images/Team/Shubhra.png"
import { Stories } from '../../Data/Stories'


export const Slide5 = () => {
    return (
        <>

            <div className='col-12'>
                <div className='row'>
                    <div className='col-md-3 col-lg-3 col-xl-3 col-12 Lato'>

                        <Stories sub="<span class='team_slide5_text Lato font-color' >I am most excited about our next decade and my role in it.</span> <br/> Over the last 10 years, the trust and ownership I've felt at Medha have allowed me to navigate my journey. Despite major personal failures, I've never felt anything change in how I held my space and voice here. In fact, I had assignments that allowed me to build better from my learnings. <br/> <br/> It is rare to feel a deep sense of ownership at one's place of work, but for me, Medha has been that place because of its people. <br/> <br/> <span class=Lato-700 style=color:#282828;>-  Shubhra, System Adoption, Medha</span>"  />

                    </div>
                    <div className='col-md-9 col-lg-9 col-xl-9 col-12'>
                        <img className='Subhra_image' src={Shubhra} />
                    </div>
                </div>
            </div>

        </>
    )
}
