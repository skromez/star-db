import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Star DB</h1>
      <nav className="header__nav nav">
        <a href="#" className="nav__link">
          People
        </a>
        <a href="#" className="nav__link">
          Planets
        </a>
        <a href="#" className="nav__link">
          Starships
        </a>
      </nav>
    </div>
  );
};

export default Header;