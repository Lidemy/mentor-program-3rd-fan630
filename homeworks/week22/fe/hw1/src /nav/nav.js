import React, { Component } from 'react';
import './nav.css';
import {
    Link, Route
} from "react-router-dom";
import FontAwesome from 'react-fontawesome';

class ItemNav extends Component {
    render(){
        const {to, children, exact} = this.props
        return(
            <Route
                path ={to}
                exact = {exact}
                children = {({match})=>(
                    <button className={`nav__item ${match ? 'active': ""}`}>
                        <Link to={to}>
                            {children}
                        </Link>
                    </button>
                )}
            />
         )
    }
}

class Nav extends Component {
    render() {
        const style = {
            fontSize: "25px",
            color:"black"
        }
        return (
            <nav className="nav">
                <button className="nav__item" ><b>Blog</b></button>
                <ItemNav to= "/" exact={true}>
                    <FontAwesome
                        name='fas fa-home'
                        style={{style}}
                    />
                    <span>Home</span>
                </ItemNav>
                <ItemNav to="/post" >
                    Post
                </ItemNav>
                <ItemNav to="/share">
                    Share
                </ItemNav>
            </nav>
        )
    }
}


export default Nav;