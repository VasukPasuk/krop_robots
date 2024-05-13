import React from 'react';
import  './Footer.block.style.scss';
import {FaFacebookF, FaInstagram, FaTelegramPlane} from "react-icons/fa";

function FooterBlock(props) {
  return (
    <section className={`footer-block`}>
      <div>
      
      </div>
      <footer>
        <div id="location-text">
          <span>Місце проведення: м. Кропивницький, вул. Т. Шевченка 1, ЦДУ імені В. Винниченка,</span>
          <span> спортивна зала, семи  поверхового корпусу</span>
        </div>
        <div className="contact-icons-container">
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
      </footer>
    </section>
  );
}

export default FooterBlock;