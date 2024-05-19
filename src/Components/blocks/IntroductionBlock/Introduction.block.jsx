import React from 'react';
import './Introduction.block.style.scss';
import {motion} from "framer-motion";

function IntroductionBlock(props) {
  return (
    <>
      <section id={`introduction-block`}>
        <div className={`image-slogan-block`}>
          <motion.h1
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
          >
            <h1>KROP_ROBOTS</h1>
          </motion.h1>
          <motion.h3
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            viewport
            transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
          >
            <h3>Дивовижна STEM-освіта <br/> без обмежень</h3>
          </motion.h3>
          <img src="./main-image.jpg" alt=""/>
        </div>
      </section>
    </>
  
  );
}

export default IntroductionBlock;