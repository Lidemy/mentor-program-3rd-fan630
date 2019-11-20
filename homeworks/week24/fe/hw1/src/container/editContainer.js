import React, { Component } from 'react';
import '../components/post/post.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { editPost} from '../WebAPI'
import * as action from '../action'
import Edit from '../components/edit'

const editContainer = (props) => {
    return <Edit {...props} />
}


const mapStateToProps = (state) =>{
    return{
        isLoadingEditPost: state.nav.isLoadingEditPost,
        post:state.nav.post
    }
}


const mapDispatchToProps = dispatch => {
    return {
        editPost: (postId, title, author, body) => {
            dispatch(action.EditSinglePost(postId, title, author, body))
        }, 
        getSinglePost: (postId) => {
            dispatch(action.SingleGetPost(postId))
        }
    }
}


export default
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(editContainer)
    )
