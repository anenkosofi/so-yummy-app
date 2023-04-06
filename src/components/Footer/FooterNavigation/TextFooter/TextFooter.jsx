import React from 'react';
import Logo from '../LogoFooter/Logo';
import { NavLink } from 'react-router-dom';
import { LogoText, NavLeft } from './TextFooter.stylde';

const TextFooter = () => {
  return (
    <div>
      <LogoText>
        <NavLink to="/main">
          <Logo inv width={'44px'} height={'44px'} />
        </NavLink>
        <span>So Yummy</span>
      </LogoText>
      <NavLeft>
        <li>Database of recipes that can be replenished </li>
        <li>Flexible search for desired and unwanted ingredients</li>
        <li>Ability to add your own recipes with photos</li>
        <li>Convenient and easy to use</li>
      </NavLeft>
    </div>
  );
};

export default TextFooter;
