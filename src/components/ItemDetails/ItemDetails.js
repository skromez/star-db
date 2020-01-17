import React, { Component } from 'react';

import './ItemDetails.scss';
import SwapiService from '../../services/SwapiService';
import ErrorButton from '../ErrorButton';

class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    image: null,
    item: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateitem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item)
        })
      })
  };

  render() {
    const { item, image } = this.state;
    if (!this.state.item) {
      return (
        <div className="person-details">
          <span>Select a item from a list</span>
        </div>
      )
    }

    const{ name, gender, birthYear, eyeColor } = item;


    return (
      <div className="person-details">
        <img src={image} alt="Character" className="person-details__img" />
        <div className="person-details__wrapper person-info">
          <h2 className="person-info__title">{name}</h2>
          <ul className="person-info__list">
            <li className="person-info__item">Gender {gender}</li>
            <li className="person-info__item">Birth year {birthYear}</li>
            <li className="person-info__item">Eye Color {eyeColor}</li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}


export default ItemDetails;
