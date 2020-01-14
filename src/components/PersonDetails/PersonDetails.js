import React from 'react';

import './PersonDetails.scss';

const PersonDetails = () => {
  return (
      <div className="person-details">
        <img src="http://placehold.it/140x170" alt="" className="person-details__img" />
        <div className="person-details__wrapper person-info">
          <h2 className="person-info__title">R2-D2</h2>
          <ul className="person-info__list">
            <li className="person-info__item">Gender: male</li>
            <li className="person-info__item">Birth year 43</li>
            <li className="person-info__item">Eye Color: red</li>
          </ul>
        </div>
      </div>
  )
}


export default PersonDetails;