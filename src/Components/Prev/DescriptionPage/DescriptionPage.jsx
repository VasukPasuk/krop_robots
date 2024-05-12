import React, {useEffect, useState} from 'react';
import './DescriptionPage.style.scss';
import {RiRobot2Fill} from "react-icons/ri";
import {useInView} from "react-intersection-observer";
import InformBlock from "../InformBlocks/InformBlock";

function DescriptionPage(props) {
  const {ref, inView} = useInView({
    threshold: 0,
  })
  const [currentInfoBlock, setCurrentInfoBlock] = useState(1)
  const [stop, setStop] = useState(false)
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const robot_animation_interval = setInterval(() => {
      setStop(prev => !prev)
      if (!visible) setVisible(true)
    }, 5000)
    return () => {
      clearInterval(robot_animation_interval)
    }
  }, [])
  
  return (
    <section id="description-section">
      <div id="description-section__left-block">
        <div ref={ref} id="robot-sumo-circle" className={`${inView && "circle-in-view"}`}>
          {(!stop && visible) && (
            <div id='victory-text-title'>
              Перемога за другим роботом, <br/>
              оскільки він виштовхнув за коло суперника
            </div>
          )
          }
          <RiRobot2Fill className={`robot-sumo-circle__robot-icon ${stop && 'robot-item1'}`}/>
          <div id="robot-sumo-circle__square"/>
          <RiRobot2Fill className={`robot-sumo-circle__robot-icon ${stop && 'robot-item2'}`}/>
        </div>
      </div>
      
      <div id="description-section__right-block">
        <div id='description-section__right-block__text-box'>
          <InformBlock number={currentInfoBlock}/>
        </div>
        <div id='description-section__right-block__buttons-wrapper'>
          <div id='buttons-box'>
            <button
              id='prev-description-button'
              onClick={() => setCurrentInfoBlock(prev => prev !== 1 ? prev - 1 : 10)}
            >
              Назад
            </button>
            <button
              id='next-description-button'
              onClick={() => setCurrentInfoBlock(prev => prev !== 10 ? prev + 1 : 1)}
            >
              Далі
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescriptionPage;