import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://twitter.com/thakur_vvk"><BsTwitter /></a>
    </div>
    <div>
    <a href="https://linkedin.com/in/thakur-vvk"><FaLinkedinIn /></a>
    </div>
    <div>
    <a href="https://instagram.com/_thakur_vvk/"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
