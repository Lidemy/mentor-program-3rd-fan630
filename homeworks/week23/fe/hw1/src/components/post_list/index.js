import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { getPosts } from '../../WebAPI'
import './post.css';


class PostList extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getPostList()
    }

    render() {
        const {posts, history} = this.props
        return (
            <div className="wrapper">
                <ul className="list-group mt-5">
                        {posts.map((post) =>
                            <li className="list-group-item" 
                                key={post.id} 
                                id={post.id}
                                onClick ={()=>{
                                    history.push('/post/'+post.id)
                                }}
                            >
                            {post.title}
                            </li>
                        )}
                </ul>
            </div>
        )
    }
}


export default PostList;
