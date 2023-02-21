import React from 'react';
import {  BsInstagram , BsBehance ,BsWhatsapp ,BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    
    <div>
    <a href='https://web.facebook.com/sanjula69/' target='_blank'>
      <FaFacebookF />
      </a>
    </div>
    <div>
    <a href='https://www.instagram.com/sanjula69/' target='_blank'>
      <BsInstagram />
      </a>
    </div>
    <div>
    <a href='https://api.whatsapp.com/send?phone=94714589854&text=Hello, I am Sanjula. Text me for more information!' target='_blank'>
      <BsWhatsapp />
      </a>
    </div>
    <div>
    <a href='https://www.linkedin.com/in/sanjula-ranasinghe-171b2413b' target='_blank'>
      <FaLinkedin/>
      </a>
    </div>
    <div>
      <a href='https://www.behance.net/sanjularanasin' target='_blank'>
      <BsBehance />
      </a>
    </div>
    <div>
      <a href='https://github.com/Sanjula39' target='_blank'>
      <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;