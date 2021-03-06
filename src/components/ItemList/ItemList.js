import React, { Component } from 'react';

import './ItemList.scss';
import Spinner from '../Spinner';

class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {

    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  }

  renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;

      const label = this.props.children(item);
      return (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      )
    })
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />
    }

    const items = this.renderItems(itemList);

    return (
      <div className="item-list">
        <ul className="list-group">
          {items}
        </ul>
      </div>
    )
  }
};

export default ItemList
