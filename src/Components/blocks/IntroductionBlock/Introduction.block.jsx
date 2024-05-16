import React from 'react';
import './Introduction.block.style.scss';

function IntroductionBlock(props) {
  return (
    <>
      <section id={`introduction-block`}>
        <div className={`image-slogan-block`}>
          <h1>KROP_ROBOTS</h1>
          <h3>Дивовижна STEM-освіта <br/> без обмежень</h3>
          <img src="./main-image.jpg" alt=""/>
        </div>
      </section>
    </>
  
  );
}

export default IntroductionBlock;