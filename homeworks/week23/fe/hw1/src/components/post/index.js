import React, { Component } from 'react';
import './post.css';
import axios from 'axios';
import {
    Link 
}from "react-router-dom"
import FontAwesome from 'react-fontawesome';
import { getSinglePost, deletePost} from '../../WebAPI'

class Item extends Component {
    render() {
        const { post } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 info">
                        <span>Id</span>
                        <p>{post.id}</p>
                        <span>Author</span>
                        <p>{post.author ? post.author : '作者不詳'}</p>
                        <span>Title</span>
                        <p>{post.title}</p>
                        <span>Created Time</span>
                        <p className="createdTime">{post.createdAt ? post.createdAt : '無從得知'}</p>
                    </div>
                    <div className="col-9 article">
                        <div className="content">{post.body ? post.body : 'Loading...'}</div>
                    </div>
                </div>
            </div>
        )
    }
}


class Post extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const postId = this.props.match.params.id
        this.props.getSinglePost(postId)
    }


    onDelete = () => {
        const postId = this.props.match.params.id
        deletePost(postId).then(response =>{
            this.props.history.push('/post')
        })
    }

    render() {
        const { post, history } = this.props
        return (
            <div className="wrapper">
                <button type="button" className="delete btn btn-secondary mt-3" onClick={this.onDelete}>
                    Delete
                </button>
                <button type="button" className="edit btn btn-secondary mt-3" onClick={()=>{
                    history.push('/post/edit/' + post.id)
                }}>
                    Edit
                </button>
                <ul className="list-group">
                    <Link to="/post">
                        <FontAwesome
                            name='angle-double-left'
                            style={{ fontSize: "25px" }}
                        />
                        <span>Back to PostList</span>
                    </Link>
                    <Item post={post} />
                </ul>
            </div>
        )
    }
}


export default Post;

