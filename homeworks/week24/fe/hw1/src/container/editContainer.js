import React, { Component } from 'react';
import '../components/post/post.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { editPost } from '../WebAPI'
import * as action from '../action'
import Edit from '../components/edit'

const editContainer = (props) => {
    return <Edit {...props} />
}


const mapStateToProps = (state) =>{
    return{
        isLoadingEditPost: state.nav.isLoadingEditPost
    }
}


const mapDispatchToProps = dispatch => {
    return {
        editPost: (postId, post) => {
            dispatch(action.EditSinglePost(postId, post))
        }
    }
}


export default
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(editContainer)
    )
