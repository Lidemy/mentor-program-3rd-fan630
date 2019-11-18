import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { getPosts } from '../WebAPI'
import * as action from '../action'
import PostList from '../components/post_list'

const postListContainer = (props) => {
    return <PostList {...props} />
}

const mapStateToProps = state => {
    return {
        isLoadingGetPosts: state.nav.isLoadingGetPosts,
        posts: state.nav.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPostList: () => {
            dispatch(action.getPostList())
        }
    }
}


export default
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(postListContainer)
    );