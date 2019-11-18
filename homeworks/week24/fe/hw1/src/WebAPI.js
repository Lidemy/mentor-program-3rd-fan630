import axios from 'axios';

export const getPosts = () => axios.get('https://qootest.com/posts?_sort=id&_order=desc&_limit=10')
export const getSinglePost = (postId) => axios.get(`https://qootest.com/posts/${postId}`)
export const deletePost = postId => axios.delete(`https://qootest.com/posts/${postId}`)
export const sharePost = (post) => axios.post('https://qootest.com/posts', post)
export const editPost = (postId, post) => axios.put(`https://qootest.com/posts/${postId}`, post)