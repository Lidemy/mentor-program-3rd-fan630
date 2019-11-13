import axios from 'axios';

export const getPosts = () => axios.get('https://qootest.com/posts?_sort=id&_order=desc&_limit=10')
export const getSinglePost = (postId) => axios.get(`https://qootest.com/posts/${postId}`)
export const deletePost = postId => axios.delete(`https://qootest.com/posts/${postId}`)
export const sharePost = (author, title, body) => axios.post('https://qootest.com/posts', { author, title, body })
export const editPost = (postId, author, title, body) => axios.put(`https://qootest.com/posts/${postId}`, { author, title, body})