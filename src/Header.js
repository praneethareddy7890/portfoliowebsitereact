import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">Projects</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header__content">
        <img src="https://www.pngmart.com/files/22/Elon-Musk-PNG-HD.png" width="10%" height="10%"/>
        <h1 className="header__title">Elon Musk</h1>
        <p className="header__subtitle">Frontend Developer</p>
      </div>
    </header>
  );
}

export default Header;
