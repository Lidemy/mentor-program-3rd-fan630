import React, { Component } from 'react';
import './edit.css';
import axios from 'axios';
import {
    Link
} from "react-router-dom"
import FontAwesome from 'react-fontawesome';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            body: '',
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.id
        this.props.getSinglePost(postId)
    }

    handleChange = (e) => {
        const { title, author, body } = this.state
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onConfirm = () => {
        const postId = this.props.match.params.id
        const {title, author, body} = this.state
        this.props.editPost(postId, title, author, body)
    }

    componentDidUpdate(prevProps) {
        const { post, isLoadingEditPost, history } = this.props
        if (post !== prevProps.post){ 
            this.handlePropsToState();
        }

        if (
            isLoadingEditPost !== prevProps.isLoadingEditPost && !isLoadingEditPost
        ) {
            history.push('/post')
        } 
    }

    handlePropsToState=() =>{
        const {post} = this.props
        this.setState({
            title: post.title,
            author: post.author,
            body: post.body
        })
    }



    render() {
        const { title, author, body } = this.state
        const style = {
            height: '300px'
        }
        return (
            <div className="wrapper">
                <h1>Edit your post</h1>
                <Link to="/post">
                    <FontAwesome
                        name='angle-double-left'
                        style={{ fontSize: "25px" }}
                    />
                    <span>Back to PostList</span>
                </Link>

                <div className="input-group mx-auto">
                    <div className="input-group__item mt-3 ">
                        <input type="text" className="form-control" placeholder="name" name="author" value={author} onChange={this.handleChange} />
                    </div>
                    <div className="input-group__item ">
                        <input type="text" className="form-control" placeholder="title" name="title" value={title} onChange={this.handleChange} />
                    </div>
                    <div className="input-group__item">
                        <textarea className="form-control" placeholder="body" style={style} name="body" value={body} onChange={this.handleChange}></textarea>
                    </div>
                    <button className="btn btn-outline-secondary mx-auto" type="button" onClick={this.onConfirm}>Confirm</button>
                </div>

            </div>

        )
    }
}


export default Edit;