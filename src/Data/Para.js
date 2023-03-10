import React, { useState,useEffect, useRef } from 'react'
import useTypewriter from "react-typewriter-hook";
import { random } from "lodash";
// import TypeWriterEffect from 'react-typewriter-effect';

export const Para = (props) => {
  const [magicName, setMagicName] = useState(props.subject);
  const intervalRef = useRef({});
  const name = useTypewriter(magicName, { typeSpeed: 50, delayMs: 1000, eraseOnComplete: false });
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
      console.log(props.index);
    },
    [magicName]
  );
  return (
    <div  className="">
   
      <p className={props.index}>{name}</p>
      <p className='student_name'></p>
    </div>
  );
}
