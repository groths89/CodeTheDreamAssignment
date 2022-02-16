import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import InventoryApp from './components/InventoryApp';
import TopMenuBar from './components/MenuBar';

const AppContainer = styled.div`
  height: 100%;
`;

const TopBar = styled.div`

`;

const SideMenu = styled.div`
  width: 25%;
  height: 100%;
  margin: 0;
`;

const PageWrap = styled.div`
  width: 75%;
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar id="top-bar">
          <TopMenuBar />
        </TopBar>
        <AppContainer id="app">
          <InventoryApp />         
        </AppContainer>
      </div>
    );
  }

}
