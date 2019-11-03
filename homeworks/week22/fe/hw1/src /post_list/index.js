import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import './post.css';


class PostList extends Component {
    constructor(){
        super()
        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        fetch('https://qootest.com/posts')
        .then(response => response.json())
        .then(res => this.setState({
            posts: res
        }))
    }

    render() {
        const {posts} = this.state
        const {history} = this.props
        return (
            <div className="wrapper">
                <ul className="list-group mt-5">
                        {posts.map((post) =>
                            <li className="list-group-item" key={post.id} id={post.id}
                                onClick={()=> {history.push('/post/'+ post.id)}
                            }>
                            {post.title}
                            </li>
                        )}
                </ul>
            </div>
        )
    }
}


export default withRouter(PostList);