import React, {useState} from 'react';
import './Introduction.block.style.scss';
import {link_names} from "../../constants/.names";
import Logo from "../../icons/Logo";
import {RxHamburgerMenu} from "react-icons/rx";
import ScrollToTopButton from "../ScrollTopButton/ScrollTopButton";

function IntroductionBlock(props) {
  const [visibility, setVisibility] = useState(false);
  
  return (
    <section id={`introduction-block`}>
      <header>
        <div className={`logo-container`}>
          {/*<img src="./logo_without_text_black.png" width={64} height={64} alt="krop_robots logo"/>*/}
          <Logo/>
          <img src="./text_black.png" width={50} height={50} alt="krop_robots logo-text"/>
        </div>
        <ul className={`links-wrapper ${visibility ? 'links-wrapper__show' : 'links-wrapper__hide'}`}>
          {link_names.map((name, index) => {
            return (
              <li key={name} className={`link-item l-i-${index + 1}`}>
                <a href="#"> {name} </a>
              </li>
            )
          })}
        </ul>
        <RxHamburgerMenu
          className={`hamburger-menu`}
          onClick={() => setVisibility(prev => !prev)}
        />
      </header>
      <div className={`image-slogan-block`}>
        <h1>KROP_ROBOTS</h1>
        <h3>Дивовижна STEM-освіта <br/> без обмежень</h3>
        <img src="./main-image.jpg" alt=""/>
      </div>
    </section>
  );
}

export default IntroductionBlock;