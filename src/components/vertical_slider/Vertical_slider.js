import React, { useEffect, useRef, useState } from 'react';
import './Animations.css'



const Vertical_slider = () => {
  
    const [isVisible, setIsVisible] = useState(false);
   
    
    const ref = useRef(null);
  

  
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
          }
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
          
            observer.unobserve(ref.current);
          }
        };
      }, []);



    useEffect(()=>{
        showAnimation()

    },[isVisible])


    const firstScreen = () =>{

      
      document.getElementById("first_card_first_text").classList.add("animate__fadeInUp");


      setTimeout(async()=>{
          try {
             await document.getElementById("first_card_first_text ").classList.add("mtpercent").remove("animate__fadeInUp");

              await document.getElementById("first_card_first_text").classList.add("animate__fadeOutUp");
          } catch (error) {
              console.log("error",error);
          }
      },2750)
    }


    const secondScreen = () =>{
     

      setTimeout(async()=>{
        try {
       
            document.getElementById("first_card_first_text").style.display = "none";

            document.getElementById("second_card_first_text").textContent = "1 million is not a random number";

            document.getElementById("second_card_first_text").classList.add("animate__fadeInUp");   
            
            
        } catch (error) {
            
        }
    },3000)

    
    setTimeout(async()=>{
      try {
        
      await document.getElementById("second_card_first_text").classList.remove("animate__fadeInUp");

      await document.getElementById("second_card_first_text").classList.add("animate__fadeOutUp");
        
      } catch (error) {
        console.log("error",error);
      }

  },5000)

    }


    const ThirdScreen = () =>{

      setTimeout(async()=>{

        try {

          document.getElementById("second_card_first_text").style.display = "none";

          document.getElementById("third_card_first_text").innerHTML = `<p>
          It represents 10 % of the estimated 9 million college-going <br /> students in India’s Hindi-speaking belt and serves as a <br /><span class='yellow-text'> tipping point </span>  for driving significant social change.
          </p>`

          document.getElementById("third_card_first_text").classList.add("animate__fadeInUp");

       

        } catch (error) {

          console.log("error",error);
          
        }
      },6000)

      setTimeout(async()=>{

        await document.getElementById("third_card_first_text").classList.remove("animate__fadeInUp");

        await document.getElementById("third_card_first_text").classList.add("animate__fadeOutUp");

        

    },9500)
    }


    const FourthScreen = () =>{

      // fadeInFromBottom

      setTimeout(async()=>{      
        document.getElementById("third_card_first_text").style.display = "none";
       
        document.getElementById("fourth_card_head").innerHTML = `<p class="vert_cards_text text-center animate__animated animate__fadeInUp ">How will we <span class='yellow-text'>40X our impact</span>  since 2011?</p>`
  
              },9000)
  
              const firstCircle = document.createElement("div");
              firstCircle.classList.add('circle');
              firstCircle.classList.add('mx-5')
              firstCircle.classList.add('animate__animated')
              firstCircle.id = "fourth_card_first_circle"
              firstCircle.innerHTML="By driving greater adoption of ‘the Medha way’ at scale";
              firstCircle.style.opacity = 0
              document.getElementById("vertical_slider_circle_container").appendChild(firstCircle)
  
  
              const secondCircle = document.createElement("div");
              secondCircle.classList.add('circle');
              secondCircle.classList.add('mx-5')
              secondCircle.classList.add('animate__animated')
              secondCircle.id = "fourth_card_second_circle"
              secondCircle.innerHTML="Remaining quality-driven in our direct student engagement";
              secondCircle.style.opacity = 0
              document.getElementById("vertical_slider_circle_container").appendChild(secondCircle)
  
  
              const thirdCircle = document.createElement("div");
              thirdCircle.classList.add('circle');
              thirdCircle.classList.add('mx-5')
              thirdCircle.classList.add('animate__animated')
              thirdCircle.id = "fourth_card_third_circle"
              thirdCircle.style.opacity = 0
              thirdCircle.innerHTML="And committing to data-driven decision-making at work";
              document.getElementById("vertical_slider_circle_container").appendChild(thirdCircle)
  
  
        setTimeout(()=>{
  
          document.getElementById("fourth_card_first_circle").classList.add('animate__fadeInUp')
          
  
          
        },10000)
  
        setTimeout(()=>{
          document.getElementById("fourth_card_second_circle").classList.add('animate__fadeInUp')
  
          
        },11000)
        setTimeout(()=>{
  
          document.getElementById("fourth_card_third_circle").classList.add('animate__fadeInUp')
  
          
        },12000)
      
     
    }

    const showAnimation = ()=>{
        if(isVisible){
          firstScreen();

          secondScreen();

          ThirdScreen();

          FourthScreen()

        }
    }


    useEffect(()=>{

    },[])


    return (
        <div ref={ref}  className="d-flex justify-content-center align-items-center">

    

           {isVisible? 
                        <>
                        <div className="text-center vert_cards_text animate__animated mtpercent" id="first_card_first_text">
                            IN 2021, WE SET AN AUDACIOUS GOAL OF HELPING <span className='yellow-text'>1 MILLION <br /> YOUTH</span> TRANSFORM THEIR LIVES IN THE NEXT 5 YEARS
                            </div>

                        
                          <div className='d-flex align-item-center justify-content-center' id="second_card_parent">
                            <p className={"text-center vert_cards_text vert_cards_text_lato animate__animated"} id="second_card_first_text">
                            
                            </p>
                        </div>
                        
                        
                          <div className={ "text-center vert_cards_text vert_cards_text_lato vert_cards_text_3rd animate__animated"} id="third_card_first_text">
                        </div>
                        

                        
                           <div className="last_slide_sec row justify-content-center">
                              <div id="fourth_card_head" className="text-center">
            
                                </div>
                                
                                <div className='d-flex justify-content-around d-flex flex-column flex-md-column  flex-lg-row' id="vertical_slider_circle_container">
                            
                                </div>
                              </div>
                        
                        
                        </>
                :
                <div>
                </div>}

        </div>
    )
}

export default Vertical_slider

