import React, { useEffect, useRef, useState } from 'react'
import Typewriter from "typewriter-effect";

export const Stories = (props) => {
  const [magicName, setMagicName] = useState(props.sub);
  // const name = useTypeWriter(magicName, { typeSpeed: 50, delayMs: 1000, eraseOnComplete: false });
  useEffect(() => {
    console.log(`d-flex flex-column ${"slide" + props.index}`);
  }, [magicName]);
  return (
    // <div  className={`d-flex flex-column ${"slide" + props.index}`}  >
    //   <p className={props.head_class}>{props.head}</p>
    //   <p className={props.className}>{name}</p>
    //   <p className={props.empclass}>{props.emp}</p>
    // </div>

    <>
      <div className='stories'>
        <Typewriter

          onInit={(typewriter) => {
            typewriter.typeString(magicName)
              .start();
          }}
        />
      </div>

    </>
  );
}
