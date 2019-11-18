import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {
    Link, Route
} from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux'
import Nav from '../components/nav/nav.js'
import { updateNavTab, updateNavText } from '../action';

const navTabContainer = (props) => {
    return <Nav {...props} />
}


const mapStateToProps = state => {
    return {
        navTab: state.nav.navTab
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTab: tab => dispatch(updateNavTab(tab))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navTabContainer);
