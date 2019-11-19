import React, { Component } from 'react';
import '../components/post/post.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { sharePost } from '../WebAPI'
import * as action from '../action'
import Share from '../components/share'

const shareContainer = (props) => {
    return <Share {...props} />
}


const mapStateToProps = (state) =>{
    return{
        isLoadingSharePost: state.nav.isLoadingSharePost, 
    }
}

//重點就是這裡要實作改變
const mapDispatchToProps = dispatch => {
    return {
        sharePost: (title, author, body) => {
            dispatch(action.ShareSinglePost(title, author, body))
        }
    }
}


export default
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(shareContainer)
    )


