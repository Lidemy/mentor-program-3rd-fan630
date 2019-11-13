import * as actionTypes from './actionTypes'

const state = {
    navTab: 'Home',
    isLoadingGetPosts: false,
    isLoadingGetPost: false,
    posts: [],
    post:{}
}

function reducer(globalState = state, action) {
    switch (action.type) {
        case actionTypes.UPDATE_NAV_TAB:
            return {
                ...globalState,
                navTab: action.name
            }

        case actionTypes.GET_POSTS:
            return {
                ...globalState,
                isLoadingGetPosts: true,
            }
        
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...globalState,
                isLoadingGetPosts: false,
                posts:action.data
            }
        
        case actionTypes.SINGLE_GET_POST:
            return {
                ...globalState,
                isLoadingGetPost: true,
            }

        case actionTypes.SINGLE_GET_POST_SUCCESS:
            return {
                ...globalState,
                isLoadingGetPost: false,
                post: action.data
            }

        default:
            return globalState
    }
}

export default reducer