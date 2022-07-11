import React from 'react';


function Card(props) {
  return(
    <div className="element">
 <h2 className="element__header">{props.card.name}</h2>
    </div>
  )
}

export default Card;
