import * as actionTypes from './actionTypes'

const state = {
    navTab: 'Home',
    isLoadingGetPosts: false,
    isLoadingGetPost: false,
    isLoadingDeletePost: false,
    isLoadingSharePost: false,
    isLoadingEditPost: false,
    posts: [],
    post: {},
}

function reducer(globalState = state, action) {

    switch (action.type) {
        case actionTypes.UPDATE_NAV_TAB:
            return {
                ...globalState,
                navTab: action.name
            }

        case 'GET_POST_LIST_PENDING':
            return {
                ...globalState,
                isLoadingGetPosts: true,
            }

        case 'GET_POST_LIST_FULFILLED':
            return {
                ...globalState,
                isLoadingGetPosts: false,
                posts: action.payload.data
            }

        case 'GET_POST_PENDING':
            return {
                ...globalState,
                isLoadingGetPost: true,
            }

        case 'GET_POST_FULFILLED':
            return {
                ...globalState,
                isLoadingGetPost: false,
                post: action.payload.data
            }

        case 'DELETE_POST_PENDING':
            return {
                ...globalState,
                isLoadingDeletePost: true,
            }

        case 'DELETE_POST_FULFILLED':
            return {
                ...globalState,
                isLoadingDeletePost: false,
                //posts: state.posts.filter(post => post.id !== action.payload)
            }

        case 'SHARE_POST_PENDING':
            return {
                ...globalState,
                isLoadingSharePost: true,
            }

        case 'SHARE_POST_FULFILLED':
            return {
                ...globalState,
                isLoadingSharePost: false,
                post: [...state.posts, action.payload]
            }

        case 'EDIT_POST_PENDING':
            return {
                ...globalState,
                isLoadingEditPost: true,
            }

        case 'EDIT_POST_FULFILLED':
            return {
                ...globalState,
                isLoadingEditPost: false,
                post: [...state.posts, action.payload]
            }

        default:
            return globalState
    }
}

export default reducer