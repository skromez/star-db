import React from 'react';

import './ItemList.scss';

const ItemList = () => {
  return (
    <div className="item-list">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Luke Skywalker
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Darth Vader
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          R2-D2
        </li>
      </ul>
    </div>
  )
};

export default ItemList