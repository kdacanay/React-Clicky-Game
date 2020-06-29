import React from "react";
// import ReactDOM from 'react-dom';
import '../Navbar/style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <ul>
        <li className="brand">
          <a className="navbar-brand" href="/" id="brand">Philly Click Game</a>
        </li>
        <li className='gameMessage'>{props.gameMessage}</li>
        <li className="scoreBoard">
          Score:
          {props.currentScore}
          <span>      </span>
          Top Score:
          {props.topScore}
        </li>
      </ul>
    </nav>
  </div>
);


export default Navbar;
