import React, { Component } from 'react';
import '../components/post/post.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { getSinglePost} from '../WebAPI'
import  * as action from '../action'
import Post from '../components/post'

const postContainer = (props) => {
    return <Post {...props} />
}


const mapStateToProps = (state) =>{
    return{
        isLoadingGetPost: state.nav.isLoadingGetPost, 
        post: state.nav.post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSinglePost: (postId) =>{  
            dispatch(action.SingleGetPost())
            getSinglePost(postId).then(res => {
                dispatch(action.SingleGetPostSuccess(res.data))
            })
        }
    }
}


export default
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(postContainer)
    )




