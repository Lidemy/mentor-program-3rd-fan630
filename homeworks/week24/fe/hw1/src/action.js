import * as actionTypes from './actionTypes'
import * as WebAPI from './WebAPI'

// action creator
export const updateNavTab = (tab) => {
    return {
        type: actionTypes.UPDATE_NAV_TAB,
        name: tab
    }
}

export const getUnsplashPostList = () => {
    return {
        type: 'GET_UNSPLASH_POST_LIST',
        payload: WebAPI.getUnsplashPosts()
    }
}

export const getPostList = () => {
    return {
        type: 'GET_POST_LIST',
        payload: WebAPI.getPosts()
    }
}

export const SingleGetPost = (postId) => {
    return {
        type: 'GET_POST',
        payload: WebAPI.getSinglePost(postId)
    }
}

export const DeletePost = (postId) => {
    return {
        type: 'DELETE_POST',
        payload: WebAPI.deletePost(postId)
    }
}

export const ShareSinglePost = (title, author, body) => {
    return {
        type: 'SHARE_POST',
        payload: WebAPI.sharePost(title, author, body)
    }
}

export const EditSinglePost = (postId, title, author, body) => {
    return {
        type: 'EDIT_POST',
        payload: WebAPI.editPost(postId, title, author, body)
    }
}