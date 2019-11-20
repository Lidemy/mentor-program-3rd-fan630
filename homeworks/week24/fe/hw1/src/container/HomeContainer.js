import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { getUnsplashPosts } from '../WebAPI'
import * as action from '../action'
import Home from '../components/home'

const HomeContainer = (props) => {
    return <Home {...props} />
}

const mapStateToProps = state => {
    return {
        isLoadingGetUnsplashPosts: state.nav.isLoadingGetUnsplashPosts,
        UnsplashPosts: state.nav.UnsplashPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUnsplashPostList: () => {
            dispatch(action.getUnsplashPostList())
        }
    }
}


export default
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
    );