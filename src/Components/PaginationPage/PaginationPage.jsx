import React, {useEffect, useState} from 'react';
import './PaginationPage.style.scss';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

function PaginationPage(props) {
  const [currentImage, setCurrentImage] = useState(1);
  
  useEffect(() => {
    const switch_interval = setInterval(() => {
      setCurrentImage(prev => prev === 9 ? 1 : prev + 1)
    }, 7000)
    return () => {
      clearInterval(switch_interval)
    }
  }, [])
  
  const switchImageHandler = (e) => {
    const direction = e.target.dataset?.direction;
    switch (direction) {
      case 'forward':
        setCurrentImage(prev => prev === 9 ? 1 : prev + 1)
        break;
      case 'backward':
        setCurrentImage(prev => prev === 1 ? 9 : prev - 1)
        break;
      default:
        break;
    }
  }
  return (
    <section className={`pagination-block`}>
      <div className={`pagination-block__images-carousel-block`}>
        <div className={`pagination-block__images-carousel`}>
          <div
            className={`pagination-block__images-wrapper`}
            style={{translate: `${-100 * (currentImage - 1)}%`}}
          >
            {[...Array(9)].map((_, index) => (
              <img
                alt={`image`}
                src={`slider-image${index + 1}.jpg`}
                className={`image img-item${index + 1}`}
              />
            ))
            }
          </div>
          <div
            data-direction={`backward`}
            onClick={switchImageHandler}
            className={`pagination-block__previous-image-button switch-image-block`}
          >
            <FaArrowLeft className={`switch-image-icon`}/>
          </div>
          <div
            data-direction={`forward`}
            onClick={switchImageHandler}
            className={`pagination-block__next-image-button switch-image-block`}
          >
            <FaArrowRight className={`switch-image-icon`}/>
          </div>
        </div>
        <div className={`pagination-block__images-circles`}>
          <div className={`pagination-block__images-circles-wrapper`}>
            {[...Array(9)].map((_, index) => (
              <div className={`circle circle-item${index + 1} ${currentImage === index + 1 ? 'active-circle' : ''}`}/>
            ))}
          </div>
        </div>
      </div>
      <div className={`pagination-block__text-block`}>
        <div className={`pagination-block__text-wrapper`}>
          <span className={`pagination-block__text-wrapper__text text-item1`}>
            Проєкт Krop_Robots засновано в 2023 році, для популяризації STEM-освіти для молоді.
          </span>
          <span className={`pagination-block__text-wrapper__text text-item2`}>
            Сьогодні ми надаємо безкоштовні уроки, яких потребують роботодавці та сучасний бізнес
            - жодної сухої теорії та "Води".
          </span>
          <span className={`pagination-block__text-wrapper__text text-item3`}>
            Krop_Robots - це комфортне середовище, в якому ваші діти зможуть себе відчути
            справжніми робототехніками.
          </span>
        </div>
      </div>
    </section>
  );
}

export default PaginationPage;