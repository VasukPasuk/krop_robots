import React, {useEffect, useState} from 'react';
import './Carousel.block.style.scss';
import {FaArrowLeft, FaArrowRight, FaBookReader, FaBriefcase, FaRobot} from "react-icons/fa";
import {CAROUSEL_LENGTH, IMAGE_SWITCHING_DURATION} from "../../../constants/.names";
import {motion} from "framer-motion";


const TAGS_DATA = [
  {
    text: "Проєкт Krop_Robots засновано в 2023 році, для популяризації STEM-освіти для молоді.",
    icon: <FaBookReader className={`tag-icon`}/>
  },
  {
    text: 'Сьогодні ми надаємо безкоштовні уроки, яких потребують роботодавці та сучасний бізнес - жодної сухої теорії та "Води".',
    icon: <FaBriefcase className={`tag-icon`}/>
  },
  {
    text: "Krop_Robots - це комфортне середовище, в якому ваші діти зможуть себе відчути справжніми робототехніками.",
    icon: <FaRobot className={`tag-icon`}/>
  }
]



function CarouselBlock(props) {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(cur_img => cur_img === (CAROUSEL_LENGTH - 1) ? 0 : cur_img + 1)
    }, [IMAGE_SWITCHING_DURATION])
    return () => {
      clearInterval(interval)
    }
  }, [currentImage]);
  return (
    <section id={`carousel-block`}>
      <div className={`carousel-wrapper`}>
        <div className={`images-wrapper`}>
          <div
            className={`images-box`}
            style={{transform: `translate(-${currentImage * 100}%)`}}
          >
            {[...Array(CAROUSEL_LENGTH)].map((_, index) => (
                <img
                  key={`slider-image${index + 1}.jpg`}
                  src={`./slider-image${index + 1}.jpg`}
                  alt={`photo number-${index}`}
                />
              )
            )}
          </div>
          <div
            className={`move-left-btn move-btn`}
            onClick={() => setCurrentImage(current_image => (
              !current_image ? CAROUSEL_LENGTH - 1 : current_image - 1
            ))}
          >
            <FaArrowLeft/>
          </div>
          <div
            className={`move-right-btn move-btn`}
            onClick={() => setCurrentImage(current_image => (
              current_image === CAROUSEL_LENGTH - 1 ? 0 : current_image + 1
            ))}
          >
            <FaArrowRight/>
          </div>
        </div>
        <ul className={`circles-wrapper`}>
          {[...Array(CAROUSEL_LENGTH)].map((_, index) => (
            <div
              key={index}
              className={`circle circle-item-${index} ${index === currentImage ? 'circle__active' : ''}`}
              onClick={() => setCurrentImage(index)}
            >
            
            </div>
          ))}
        </ul>
      </div>
      <div className={`carousel-text-wrapper`}>
        <ul className={`tags-wrapper`}>
          {TAGS_DATA.map((tag, index) => (
            <motion.li
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{ease: 'easeIn', duration: 0.25, delay: index * 0.325}}
            >
              <li className={`tag-box tag-item${++index}`}>
                <div className={`tag-icon-box`}>
                  {tag.icon}
                </div>
                <div className={`tag-text`}>
                  {tag.text}
                </div>
              </li>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CarouselBlock;