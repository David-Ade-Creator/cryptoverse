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
      
      <div className="footer">
        <Typography.Title level={5} style={{color:"white",textAlign:"center"}}>
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
    </div>
  );
}

export default App;
