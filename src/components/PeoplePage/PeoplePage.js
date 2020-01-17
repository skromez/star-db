import React, { Component } from 'react';

import './PeopePage.scss';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/SwapiService';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

const Row = ({left, right}) => {
  return (
    <div className='app__wrapper'>
      {left}
      {right}
    </div>
  )
};

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList
        getData={this.swapiService.getAllPeople}
        onItemSelected={this.onPersonSelected}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
        <ItemDetails personId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    )
  }
}

