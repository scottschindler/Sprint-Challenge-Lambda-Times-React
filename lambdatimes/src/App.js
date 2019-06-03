import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Card from './components/Content/Card';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />

    </div>
  );
}

export default App;
