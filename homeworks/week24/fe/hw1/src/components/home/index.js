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
    constructor() {
        super()
        this.state = {
            pictures: [],
            isLoading: true
        }
    }

    componentDidMount() {
        const { pictures } = this.state
        const url = "https://api.unsplash.com/photos/" + "?client_id=aae4b30df237a7474cc5ff86eca6fd20ff9c173db667d16b8958205a6948fab4" + "&per_page=30";
        axios.get(url)
        //.then(res => console.log(res))
        axios.get(url)
            .then(res => {
                this.setState({
                    pictures: res.data,
                    isLoading: false
                })
            })

    }

    render() {
        const { pictures, isLoading} = this.state
        const template =(
            <div className="wrapper">
                {pictures.map(picture =>
                    <div className="row">
                        <div className="col">
                            <Img src={picture.urls.small} desc={picture.alt_description} link={picture.links.html}/>
                            </div>
                    </div>
                )}
            </div>
        )
        return (
            <div>
                <h1>Welcome</h1>
                {isLoading ? <h4>Loading...</h4> : template}
            </div>
        )
    }
}


export default Home;