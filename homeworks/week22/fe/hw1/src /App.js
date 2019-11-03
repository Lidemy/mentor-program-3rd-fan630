// eslint-disable-next-line

import React, {Component}from 'react';
import './App.css';
import Nav from './nav/nav.js'
import Footer from './footer/footer.js'
import Share from './share'
import Home from './home'
import PostList from './post_list'
import Post from './post'
import FontAwesome from 'react-fontawesome';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component{
   constructor(){
     super()
     this.state = {
         tab: 'home'
     }
   }

   render(){
     const {tab} = this.state
      return(
        <Router>
        <div className="app">
            <Nav />
            <Footer />
            <div className="page">
                <Route exact path="/" component={Home}/>
                <Route path="/share" component={Share}/>
                <Route exact path="/post" component={PostList}/>
                <Route path="/post/:id" component={Post} />
            </div>
        </div>
        </Router>
      )
   }
}

export default App;
