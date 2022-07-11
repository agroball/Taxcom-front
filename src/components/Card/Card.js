import React from 'react';
import initialPVP from '../../utils/initialPVP';


function Card(props) {

  function renderList() {
    const listItems = initialPVP.map(composeItem);
    document.querySelector('.element').append(...listItems);
  }

  function composeItem(item) {
    const newItem = templateElement.content.cloneNode(true);
    const textItem = newItem.querySelector(".element__header");
    textItem.textContent = item.name;
  }


  return(
    <div className="element">
 <h2 className="element__header"></h2>
    </div>
  )
}

export default Card;
