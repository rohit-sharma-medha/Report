import React, { useState, useEffect, useRef } from 'react'
import Typewriter from "typewriter-effect";
// import TypeWriterEffect from 'react-typewriter-effect';


export const Para = (props) => {
  const [magicName, setMagicName] = useState(props.subject);
  // const intervalRef = useRef({});
  useEffect(
    () => {
      // intervalRef.current = setInterval(() => {
      //   // index = index + 1 > 2 ? 0 : ++index + 1;
      //   index = index > 2 ? 0 : ++index;
      //   setMagicName(MagicOcean[index]);
      // }, 5000);
      // return function clear() {
      //   clearInterval(intervalRef.current);
      // };
      console.log("para props",props);
    },
    [magicName]
  );
  return (
    <div className={props.index}>

    {/* <p>
      {magicName}
    </p> */}
    <div className='animate__animated animate__fadeIn time1' dangerouslySetInnerHTML={ { __html: magicName}} />

      {/* <Typewriter

        onInit={(typewriter) => {
          typewriter.typeString(magicName)
            .start()
            ;
        }}
        options={{
          delay: 15,
        }}
      /> */}
      
    </div>
  );
}
