import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Language, darkMode } from '../../context/context';
import dark from '/src/images/dark.svg'
import light from '/src/images/light.svg'
import './style.css';

function Header() {
  const [language, setLanguage] = useState(null);
  const {state: {darkmode}, ChangeMode} = useContext(darkMode);
  function setDarkMode(){
    if(!darkmode){
      document.body.classList.add('dark');
    }
    else{
      document.body.classList.remove('dark');
    }
    ChangeMode();
  }
  function HandleChange(e){
    setLanguage(e.target.value);
  }
  
  return (
    <header className="header">
    <div className="container header-container">
      <div className="logo-nav">
        <Link to="/" className="logo">LOGO</Link>
        <ul className="nav-list">
          <li className="nav-item">
          {language=='uz' ? <NavLink to='/'>Uy sahifasi</NavLink> : language=='ru'? <NavLink to='/'>Дом</NavLink> : <NavLink to='/'>Home</NavLink>}
          </li>
          <li className="nav-item">
          {language=='uz' ? <NavLink to='/services'>Xizmatlar</NavLink> : language=='ru'? <NavLink to='/services'>Услуги</NavLink> : <NavLink to='/services'>Service</NavLink>}
          </li>
          <li className="nav-item">
          {language=='uz' ? <NavLink to='/about'>Biz haqimizda</NavLink> : language=='ru'? <NavLink to='/about'>О нас</NavLink> : <NavLink to='/about'>About</NavLink>}
          </li>
          <li className="nav-item">
          {language=='uz' ? <NavLink to='/partners'>Bizning hamkorlar</NavLink> : language=='ru'? <NavLink to='/partners'>Наши партнеры</NavLink> : <NavLink to='/partners'>Our partners</NavLink>}
          </li>
        </ul>
      </div>
      <select onChange={HandleChange} class="form-select">
        <option class="option_item" value="en">English</option>
        <option class="option_item" value="uz">Uzbek</option>
        <option class="option_item" value="ru">Russia</option>
      </select>
      <btn className="header-btn" onClick={() => setDarkMode()}>
      {darkmode ? <><img src={light} className="ligth_icon" alt="light_icon"/>
              <p className="dark__text">LightMode</p> </> : <><img src={dark} className="dark_icon" alt="dark_icon"/>
              <p className="dark__text">DarkMode</p> </> }
      </btn>
    </div>
  </header>
  )
}

export default Header