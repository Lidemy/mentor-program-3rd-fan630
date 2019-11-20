import React, { Component } from 'react';
import './home.css';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';

const Img = ({ src, desc, link }) => {
    return (
        <div className="pic">
            <a href={link} target="_blank">
                <img src={src} alt=""/>
            </a>
            <p>{desc}</p>
        </div>
    )
}


class Home extends Component {
    componentDidMount() {
        this.props.getUnsplashPostList()
    }

    render() {
        const { isLoadingGetUnsplashPosts, UnsplashPosts } = this.props
        const template =(
            <div className="wrapper">
                {UnsplashPosts.map(UnsplashPost =>
                    <div className="row">
                        <div className="col">
                            <Img src={UnsplashPost.urls.small} desc={UnsplashPost.alt_description} link={UnsplashPost.links.html}/>
                            </div>
                    </div>
                )}
            </div>
        )
        const loading = (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
        return (
            <div>
                <h1>Welcome</h1>
                {isLoadingGetUnsplashPosts ? loading : template}
            </div>
        )
    }
}


export default Home;