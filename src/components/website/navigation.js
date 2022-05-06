import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            home: 'active',
            service: '',
            gallery: '',
            about: '',
            contact: ''
        }
    }

    rpbEvent = (router) => {
        this.props.history.push(`/${router}`);
    }

    setAcitveNavigation = (toggle) => {
        switch (toggle) {
            case 'home':
                this.setState({
                    home: 'active',
                    service: '',
                    gallery: '',
                    contact: '',
                    about: ''
                })
                break;
            case 'service':
                this.setState({
                    home: '',
                    service: 'active',
                    gallery: '',
                    contact: '',
                    about: ''
                })
                break;
            case 'gallery':
                this.setState({
                    home: '',
                    service: '',
                    gallery: 'active',
                    contact: '',
                    about: ''
                })
                break;
            case 'contact':
                this.setState({
                    home: '',
                    service: '',
                    gallery: '',
                    contact: 'active',
                    about: ''
                })
                break;
            case 'about':
                this.setState({
                    home: '',
                    service: '',
                    gallery: '',
                    contact: '',
                    about: 'active'
                })
                break;
            default:
                this.setState({
                    home: 'active',
                    service: '',
                    gallery: '',
                    contact: '',
                    about: ''
                })
                break;
        }
    }

    render() {
        const { home, service, gallery, contact, about } = this.state;
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
                                </div>
                                <div className="collapse navbar-collapse" id="mynavbar">
                                    <ul className="nav navbar-nav">
                                        <li ><a href="">R.A Industries</a></li>
                                        <li className={home} onClick={() => this.setAcitveNavigation('home')}><a href='#home'>Home</a></li>
                                        <li className={service} onClick={() => this.setAcitveNavigation('service')}><a href='#service'>Service</a></li>
                                        <li className={gallery} onClick={() => this.setAcitveNavigation('gallery')}><a href='#gallery'>Gallery</a></li>
                                        <li className={about} onClick={() => this.setAcitveNavigation('about')}><a href='#about'>About</a></li>
                                        <li className={contact} onClick={() => this.setAcitveNavigation('contact')}><a href='#contact'>Contact</a></li>
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