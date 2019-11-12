import * as actionTypes from './actionTypes'


export const updateNavTab = (tab) => {
    return {
        type: actionTypes.UPDATE_NAV_TAB,
        name: tab
    }
}

export const getPosts = () => ({
    type: actionTypes.GET_POSTS
})

export const getPostsSuccess = (data) => ({
    type: actionTypes.GET_POSTS_SUCCESS, 
    data
})

export const SingleGetPost = () => ({
    type: actionTypes.SINGLE_GET_POST
})

export const SingleGetPostSuccess = (data) => ({
    type: actionTypes.SINGLE_GET_POST_SUCCESS,
    data    
})


