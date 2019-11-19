import React, { Component } from 'react';
import './post.css';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import {
    Link
} from "react-router-dom"
import FontAwesome from 'react-fontawesome';
import { getSinglePost, deletePost } from '../../WebAPI'

class Item extends Component {
    render() {
        const { post } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 info">
                        <span>Id</span>
                        <div>{post.id}</div>
                        <span>Author</span>
                        <div>{post.author ? <ReactMarkdown source={post.author} />: '作者不詳'}</div>
                        <span>Title</span>
                        <div><ReactMarkdown source={post.title} /></div>
                        <span>Created Time</span>
                        <div className="createdTime">{post.createdAt ? post.createdAt : '無從得知'}</div>
                    </div>
                    <div className="col-9 article">
                        <div className="content">
                            {post.body ? <ReactMarkdown source={post.body} /> : 'Loading...'}
                        </div>
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
        const message = 'Are you sure deleting this?';
        const postId = this.props.match.params.id
        const { deletePost } = this.props;
        if (window.confirm(message)) {
            deletePost(postId);
        }
    }

    componentDidUpdate(prevProps){
        const { isLoadingDeletePost, history} = this.props
        if (isLoadingDeletePost !== prevProps.isLoadingDeletePost && !isLoadingDeletePost){
            history.push('/post')
        }
    }


    render() {
        const { post, history, deletePost } = this.props
        return (
            <div className="wrapper">
                <button type="button" className="delete btn btn-secondary mt-3" onClick={this.onDelete}>
                    Delete
                </button>
                <button type="button" className="edit btn btn-secondary mt-3" onClick={() => {
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