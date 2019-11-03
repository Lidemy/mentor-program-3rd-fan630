import React, { Component } from 'react';
import './post.css';
import axios from 'axios';
import {
    Link 
}from "react-router-dom"
import FontAwesome from 'react-fontawesome';


class Item extends Component{
    render(){
        const { post } = this.props
        return(
            <div className="container">
                <div className="row">
                    <div className="col-3 info">
                        <span>Id</span>
                            <p>{post.id}</p>
                        <span>Author</span>
                            <p>{post.author ? post.author:'作者不詳'}</p>
                        <span>Title</span>
                            <p>{post.title}</p>
                        <span>Created Time</span>
                            <p className="createdTime">{post.createdAt ? post.createdAt :'無從得知'}</p>
                    </div>
                    <div className="col-9 article">
                        {/* <span className="contents">Content</span> */}
                        <p className="content">{post.body ? post.body: 'Loading...'}</p>
                    </div>
                </div>
            </div>
        )
    }
}


class Post extends Component {
    constructor(){
        super()
        this.state = {
            post:{}
        }
    }

    componentDidMount(){
        const postId = this.props.match.params.id
        fetch('https://qootest.com/posts/' + postId)
            .then(response => response.json())
            .then(resp => this.setState({
                post: resp
            }))
        }
    
   
    onDelete = () => {
        const postId = this.props.match.params.id
        axios.delete('https://qootest.com/posts/' + postId)
            .then(() => {
                alert('刪除成功!')
            })
            .catch(() => {
                alert('失敗')
            })
    }

    render() {
        const {post} = this.state
        return (
            <div className="wrapper">
                <button type="button" className="delete btn btn-secondary mt-3" onClick={this.onDelete}>
                    Delete
                </button>
                <ul className="list-group">
                    <Link to="/post">
                        <FontAwesome
                            name='angle-double-left'
                            style={{ fontSize: "25px" }}
                        />
                        <span>Back to PostList</span>
                    </Link>
                    <Item post={post}/>  
                </ul>
            </div>
        )
    }
}


export default Post;