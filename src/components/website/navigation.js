import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import navigation from './navigation.module.css';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            home: props.page == '0' ? 'active' : '',
            gallery: props.page == '1' ? 'active' : '',
            contact: props.page == '3' ? 'active' : '',
            about: props.page == '4' ? 'active' : '',
        }
    }

    rpbEvent = (router) => {
        this.props.history.push(`/${router}`);
    }

    render() {
        const { home, gallery, contact, about} = this.state;
        return (
            <React.StrictMode>
                <div className="container-fluid well">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-default navbar-fixed-top">
                                <div className="navbar-header">
                                    <button className="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a onClick={() => this.rpbEvent('home')} href=""></a>
                                </div>
                                <div className="collapse navbar-collapse" id="mynavbar">
                                    <ul className="nav navbar-nav">
                                        <li onClick={() => this.rpbEvent('home')}><a href="">R.A Industries</a></li>
                                        <li className={home} onClick={() => this.rpbEvent('home')}><a href=''>Home</a></li>
                                        <li className={gallery} onClick={() => this.rpbEvent('gallery')}><a href="">Gallery</a></li>
                                        <li className={contact} onClick={() => this.rpbEvent('contact')}><a href="">Contact</a></li>
                                        <li className={about} onClick={() => this.rpbEvent('about')}><a href="">About</a></li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li onClick={() => this.rpbEvent('login')} style={{ marginRight: '15px' }}><a href=""><i className="glyphicon glyphicon-log-in"> Login</i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.StrictMode>
        )
    }
}

export default withRouter(Navigation);