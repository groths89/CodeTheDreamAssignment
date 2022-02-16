import React from 'react';
import styled from 'styled-components';
import './App.css';
import '../public/favicon.ico';
import InventoryList from './components/InventoryList';

const Inventory = styled.div`

`;

const name = 'Gregory';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome, {name}</h1>
        <Inventory id="inventory">
          <InventoryList />
        </Inventory>
      </div>
    )
  }

}
