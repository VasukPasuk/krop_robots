import React, {useEffect, useState} from 'react';
import './PhotoPage.style.scss';
import {useInView} from "react-intersection-observer";

function PhotoPage(props) {
  const {ref, inView} = useInView({
    threshold: 0,
  });
  const [pos, setPos] = useState(0)
  useEffect(() => {
    const move = setInterval(() => {
      setPos(prev => {
        if (prev === 8) return 0
        return prev + 1
      })
    }, 4000)
    return () => {
      clearInterval(move);
    }
  }, [])
  console.log(pos)
  return (
    <section id='photo-section'>
      <div id="images-wrapper">
        <div id="img-box">
          <div id="img-wrapp" style={{transform: `translateX(${-(600 * pos) + 'px'})`}}>
            {/*{[...Array(9).keys()].map(index => (*/}
            {/*  <img src={`slider-image${index+1}.jpg`} alt={'g'} className="collage-image"/>*/}
            {/*))}*/}
            {[...Array(9).keys()].map(index => (
              <div style={{backgroundImage: `url(slider-image${index + 1}.jpg)`}} className="collage-image"/>
            ))}
          </div>
        </div>
      </div>
      <div ref={ref} className="photo-section__text-box">
        <div>
          <span className={`${inView && 'text-inview'}`}>Проєкт Krop_Robots засновано в 2023 році, для популяризації STEM-освіти для молоді.</span>
          <span className={`${inView && 'text-inview'}`}>Сьогодні ми надаємо безкоштовні уроки, яких потребують роботодавці та сучасний бізнес - жодної сухої теорії та "Води".</span>
          <span className={`${inView && 'text-inview'}`}>Krop_Robots - це комфортне середовище, в якому ваші діти зможуть себе відчути справжніми робототехніками.</span>
        </div>
      </div>
    </section>
  );
}

export default PhotoPage;