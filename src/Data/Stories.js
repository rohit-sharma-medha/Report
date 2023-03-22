import React, { useEffect, useRef, useState } from 'react'
import Typewriter from "typewriter-effect";

export const Stories = (props) => {
  const [magicName, setMagicName] = useState(props.sub);
  // const name = useTypeWriter(magicName, { typeSpeed: 50, delayMs: 1000, eraseOnComplete: false });
  useEffect(() => {
    console.log("props.sub ------------------> \n ", props.sub);
  }, [magicName]);
  return (
  

    <>
      <div className='stories'>
        
        <div className='animate__animated animate__fadeIn time1' dangerouslySetInnerHTML={ { __html: magicName}} />

        
      </div>

    </>
  );
}
