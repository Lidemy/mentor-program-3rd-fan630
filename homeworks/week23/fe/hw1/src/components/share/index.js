import React, { Component } from 'react';
import './share.css';
import {sharePost} from '../../WebAPI'
import axios from 'axios';
import {
    Link
}from 'react-router-dom'

import FontAwesome from 'react-fontawesome';


class Share extends Component {
    constructor(props){
        super(props)
        this.state = {
            author: '',
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        const { author, title, body } = this.state
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = () => {
        const { author, title, body } = this.state
        sharePost(author, title, body).then(response => {
            this.props.history.push('/post')
        })
        this.setState({
            author: '',
            title: '',
            body: ''
        })
    }


    render() {
        const {author, title, body } = this.state
        const style={
            height:'300px'
        }
        return (
            <div className="wrapper">
                <h1>Share your post</h1>

                <Link to="/post">
                    <FontAwesome
                        name='angle-double-left'
                        style={{ fontSize: "25px" }}
                    />
                    <span>Back to PostList</span>
                </Link>

                <div className="input-group mx-auto">
                    <div className="input-group__item mt-3 ">
                        <input type="text" className="form-control" placeholder="name" name= "author" value={author} onChange={this.handleChange}/>
                    </div>
                    <div className="input-group__item ">
                        <input type="text" className="form-control" placeholder="title" name="title" value={title} onChange={this.handleChange}/>
                    </div>
                    <div className="input-group__item">
                        <textarea className="form-control" placeholder="body" style={style} name="body" value={body} onChange={this.handleChange}></textarea>
                    </div>
                    <button className="btn btn-outline-secondary mx-auto" type="button" onClick={this.onSubmit}>send</button>
                </div>
                    
            </div>

        )
    }
}

export default Share
