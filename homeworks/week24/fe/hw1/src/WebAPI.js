import axios from 'axios';

export const getUnsplashPosts = () => axios.get('https://api.unsplash.com/photos/?client_id=aae4b30df237a7474cc5ff86eca6fd20ff9c173db667d16b8958205a6948fab4&per_page=30')
export const getPosts = () => axios.get('https://qootest.com/posts?_sort=id&_order=desc&_limit=10')
export const getSinglePost = (postId) => axios.get(`https://qootest.com/posts/${postId}`)
export const deletePost = postId => axios.delete(`https://qootest.com/posts/${postId}`)
export const sharePost = (title, author, body) => axios.post('https://qootest.com/posts', { title, author, body })
export const editPost = (postId, title, author, body) => axios.put(`https://qootest.com/posts/${postId}`, {title, author, body})