// eslint-disable-next-line

import React, { Component } from 'react';
import './App.css';
import Nav from './container/navTabContainer'
import Footer from './components/footer/footer.js'
import Share from './container/shareContainer'
import Home from './container/HomeContainer'
import Edit from './container/editContainer.js'
import PostList from './container/postListContainer'
import Post from './container/postContainer'
import FontAwesome from 'react-fontawesome';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux'


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Footer />
          <div className="page">
            <Route exact path="/" component={Home} />
            <Route path="/share" component={Share} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/post/edit/:id" component={Edit} />
            <Route exact path="/post" component={PostList} />
          </div>
        </div>
      </Router>
    )
  }
}
export default App

