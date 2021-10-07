import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from "antd";
import {Navbar, Exchanges, HomePage,Cryptocurrencies,CryptoDetails, News} from './components';

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/exchanges" component={Exchanges} exact/>
              <Route path="/cryptocurrencies" component={Cryptocurrencies} exact/>
              <Route path="/crypto/:coinId" component={CryptoDetails} exact/>
              <Route path="/news" component={News} exact/>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
