import React, { Component } from 'react';
import './home.css';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';

const Img = ({src, desc}) =>{
    return(
        <div className="pic">
            <img src={src} alt="" />
            <p>{desc}</p>
        </div>
    )
}


class Home extends Component {
    constructor(){
        super()
        this.state ={
            pictures:[]
        }
    }
    
    componentDidMount(){
        const { pictures } = this.state
        const url = "https://api.unsplash.com/photos/"+"?client_id=aae4b30df237a7474cc5ff86eca6fd20ff9c173db667d16b8958205a6948fab4"+"&per_page=30";
            axios.get(url)
            // .then(res => {
            //     console.log(res.data)
            // })
            .then(res =>{
                this.setState({
                    pictures: res.data
                })
            })
            
    }

    render() {
        const {pictures} = this.state
        return (
            <div>
                <h1>Welcome</h1>
                <div className="wrapper">
                        {pictures.map(picture =>
                            <div className="row">
                                <div className="col">
                                    {picture.urls.small ? <Img src={picture.urls.small} desc={picture.alt_description}/> : 'Loading...'}
                                </div>
                            </div>
                        )}    
                </div>
            </div>
        )
    }
}


export default Home;