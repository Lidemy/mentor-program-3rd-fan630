import React, { Component } from 'react';
import './footer.css';
import {
    Link, Route
} from "react-router-dom";
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
    render() {
        const style = {
            color: "black",
            fontSize: "15px"
        }
        return (
            <div className="footer">
                <div className="wrapper clearfix">
                    <div className="copyRight">
                        <div className="title">Copyright © 2019 Fan630 Inc. All rights reserved</div>
                        <div className="subTitle">Build website with lots of fun</div>
                    </div>
                    <div className="socialMedia">
                        <div className="link">
                            <a href="#">
                                <FontAwesome
                                    name='fas fa-facebook'
                                    style={{style}}
                                />
                            </a>
                            <a href="#">
                                <FontAwesome
                                    name='fas fa-twitter'
                                    style={{ style }}
                                />
                            </a>
                            <a href="#">
                                <FontAwesome
                                    name='fas fa-weixin'
                                    style={{ style }}
                                /></a>
                            <a href="#">
                                <FontAwesome
                                    name='fas fa-google'
                                    style={{ style }}
                                />
                            </a>
                            <a href="#">
                                <FontAwesome
                                    name='fas fa-behance'
                                    style={{ style }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;