import React from 'react';
import  './Footer.block.style.scss';
import {FaFacebookF, FaInstagram, FaTelegramPlane} from "react-icons/fa";
import {FaMapLocationDot} from "react-icons/fa6";

function FooterBlock(props) {
  return (
    <footer>
      {/*<div id="location-text">*/}
      {/*  <span>Місце проведення: м. Кропивницький, вул. Т. Шевченка 1, ЦДУ імені В. Винниченка,</span>*/}
      {/*  <span> спортивна зала, семи  поверхового корпусу</span>*/}
      {/*</div>*/}
      {/*<div className="contact-icons-container">*/}
      {/*</div>*/}
      <div className={`footer-top`}>
        <div className={`footer__location-container`}>
          <div className={`footer__location-block-title footer-block-title`}>
            <span>Місце проведення</span>
            <FaMapLocationDot className={`footer__location-block-icon`}/>
          </div>
          <div className={`footer__location-block-main-text`}>
            <span> м. Кропивницький, вул. Т. Шевченка 1, </span>
            <span> ЦДУ імені В. Винниченка </span>
            <span> спортивна зала, семи  поверхового корпусу </span>
          </div>
        </div>
        <div className={`footer__follow-container`}>
          <div className={`footer__follow-block-title footer-block-title`}>
            Слідкуйте за нами
          </div>
          <div className={`footer__follow-block-icons-box`}>
            <a
              href="https://www.google.com/url?q=https%3A%2F%2Ft.me%2Fkrop_robots&sa=D&sntz=1&usg=AOvVaw3vUQ9H8GIBWV7TCiHrGLfF">
              <FaInstagram className="contact-icon"/>
            </a>
            <a
              href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fkrop_robots%2F%3Figsh%3DNXN4d291ZHJ0eng2&sa=D&sntz=1&usg=AOvVaw0SKUxLed1eq-zOiMNcSOr8">
              <FaTelegramPlane className="contact-icon"/>
            </a>
            <a
              href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F1301857734041287&sa=D&sntz=1&usg=AOvVaw1QOR1v6JxQrRJhz9S8lnt_">
              <FaFacebookF className="contact-icon"/>
            </a>
          </div>
        </div>
      </div>
      <div className={`footer-bottom`}>
        <div className={``}>
          All rights reserved ©
        </div>
      </div>
    </footer>
  );
}

export default FooterBlock;