import React, { Component } from 'react';
import './nav.css';
import {
    Link, Route
} from "react-router-dom";
import * as action from '../../action'
import FontAwesome from 'react-fontawesome';
import { FaMarkdown } from 'react-icons/fa';

function ItemNav(props) {
    const { to, children, exact, updateTab } = props
    return (
        <Route
            path={to}
            exact={exact}
            children={({ match }) => (
                <button className={`nav__item ${match ? 'active' : ""}`}
                    onClick={() => { updateTab(to) }}
                >
                    <Link to={to}>
                        {children}
                    </Link>
                </button>
            )}
        />
    )
}

const Nav = ({ updateTab }) => {
    const style = {
        fontSize: "25px",
        color: "black"
    }
    return (
        <nav className="nav">
            <button className="nav__item" ><b>Blog</b></button>
            <ItemNav to="/" exact={true} updateTab={updateTab}>
                <FontAwesome
                    name='fas fa-home'
                    style={{ style }}
                />
                <span>Home</span>
            </ItemNav>
            <ItemNav to="/post" updateTab={updateTab}>
                Post
                </ItemNav>
            <ItemNav to="/share" updateTab={updateTab}>
                <FaMarkdown style={{ fontSize: "25px"}} />
                Share
                </ItemNav>
        </nav>
    )
}

export default Nav;