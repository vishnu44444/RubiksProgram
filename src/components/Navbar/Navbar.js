import React from "react";
import "./Nav.css";
import 'react-dropdown/style.css'
import CubeIcon from './CubeIcon';

const Navbar = props => {
  const navCubesLeft = [];
  const navCubesRight = [];

  function reloadPage() {
    setTimeout(function() {
      window.location.reload();
    }, 50);
  }

  for (let i = 2; i <= 10; i++) {
    const cubeLink = (
      <li className="nav-item" key={i}>
        <a className="nav-link cube-link" href={`/RubiksProgram/#id=${i}`} onClick={reloadPage}>
          <><CubeIcon size={i} /> {i}x{i}</>
        </a>
      </li>
    );
    if (i <= 6) {
      navCubesLeft.push(cubeLink);
    } else {
      navCubesRight.push(cubeLink);
    }
  }
  return (
    <nav className="navbar navbar-dark fixed-top justify-content-between">
      <ul className="nav">
        {navCubesLeft}
      </ul>
      <p className="navbar-brand mx-auto" style={{
        fontSize: '1.7rem',
        fontFamily: 'Bebas Neue',
        fontWeight: 'bold',
        background: ' #ffffffff',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        marginBottom: 0,
        textShadow: '1px 1px 3px rgba(251, 249, 249, 0.5)'
      }}>{props.title}</p>
      <ul className="nav align-items-center">
        {navCubesRight}
        <li className="nav-item">
          <button id="fullscreenBtn" value="true">Fullscreen</button>
        </li>
      </ul>
    </nav>)
};

export default Navbar;
