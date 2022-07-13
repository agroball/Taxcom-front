import React from 'react';
import './Card.css';
import {NavLink} from "react-router-dom";

function Card(props) {

  return(
    <div className="element">
      {/*<h2 className="element__header">ПВП</h2>*/}
      <nav className="table">
        <NavLink to='/TP1' className="table__cell">
          <h3 className="table__heading">TP1</h3>
        </NavLink>
        <NavLink to='/TP3' className="table__cell">
          <h3 className="table__heading">TP3</h3>
        </NavLink>
        <NavLink to='/TP4' className="table__cell">
          <h3 className="table__heading">TP4</h3>
        </NavLink>
        <NavLink to='/TP5' className="table__cell">
          <h3 className="table__heading">TP5</h3>
        </NavLink>
        <NavLink to='/TP6B1' className="table__cell">
          <h3 className="table__heading">TP6B1</h3>
        </NavLink>
        <NavLink to='/TP6B2' className="table__cell">
          <h3 className="table__heading">TP6B2</h3>
        </NavLink>
        <NavLink to='/TP7' className="table__cell">
          <h3 className="table__heading">TP7</h3>
        </NavLink>
      </nav>
    </div>
  )
}

export default Card;
