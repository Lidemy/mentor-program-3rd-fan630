import React, { Component } from 'react';
import './share.css';
import axios from 'axios';
import {
    Link
}from 'react-router-dom'
import FontAwesome from 'react-fontawesome';


class Share extends Component {
    constructor(){
        super()
        this.state = {
            author:'', 
            title: '', 
            body: ''
        }
    }

    //這邊已經可以拿掉變更後的值. 
    handleChange = (e) =>{
        const { author, title, body } = this.state
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // componentDidUpdate(preState){
    //     const newPost = []
    //     const { author, title, body } = this.state
    //     if (preState.author !== author && preState.title !== title && preState.body !== body){
    //         newPost.push({author, title, body})
    //         console.log(newPost)
    //         this.onSubmit(newPost)
    //     }   
    // }

    onSubmit = () => {
        const { author, title, body } = this.state
        const newPost = []  
        axios.post('https://qootest.com/posts', {
                author, 
                title, 
                body
        })
        .then(() => {
            alert('成功!')
        })
        .catch(()=> {
            alert('失敗!')
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
                        <input type="text" className="form-control" placeholder="title" name= "title" value={title} onChange={this.handleChange}/>
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


export default Share;