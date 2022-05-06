import React, { Component } from 'react';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo_c: 'https://storage.googleapis.com/webdashboard/webhomeImages/logos/logo_c.png'
        }
    }

    onSocialMedia = (channel) => {
        switch (channel) {
            case 'facebook':
                window.open('https://www.facebook.com/RBP-Investments-PVT-LTD-100682665661447/?ref=pages_you_manage')
                break;
            case 'twitter':
                window.open('https://twitter.com/RbpPvt')
                break;
            case 'instagram':
                window.open('https://www.instagram.com/rbpinvestments')
                break;
        }
    }

    render() {

        const { logo_c } = this.state;

        return (
            <React.StrictMode>
                <br /><br />
                <div className='container-fluid' style={{ backgroundColor: 'black' }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <div className='row' style={{ marginTop: '36px' }}>
                                    <div className='col-md-2'><div className='btn btn-primary'>Phone :</div></div>
                                    <div className='col-md-6'><div className='btn btn-primary btn-block'>+919840926119</div></div>
                                </div><br />
                                <div className='row'>
                                    <div className='col-md-2'><div className='btn btn-primary'>Email :</div></div>
                                    <div className='col-md-6'><div className='btn btn-primary btn-block'>ho@rbpinvestments.in</div></div>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                {/* <div style={{ height: '150px', borderLeft: '6px solid #7393B3' }}></div> */}
                            </div>
                            <div className='col-md-5'>
                                <div className='row' style={{ marginTop: '36px' }}>
                                    <div className='col-md-3'>
                                        <div onClick={() => this.onSocialMedia('facebook')} style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                                            <img className='img img-responsive img-circle' src={`https://storage.googleapis.com/webdashboard/webcontactsocialimages/facebook.png`} alt='fackbook' />
                                        </div>
                                    </div>
                                    <div onClick={() => this.onSocialMedia('twitter')} className='col-md-3'>
                                        <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                                            <img className='img img-responsive img-circle' src={`https://storage.googleapis.com/webdashboard/webcontactsocialimages/twitter.png`} alt='fackbook' />
                                        </div>
                                    </div>
                                    <div onClick={() => this.onSocialMedia('instagram')} className='col-md-3'>
                                        <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                                            <img className='img img-responsive img-circle' src={`https://storage.googleapis.com/webdashboard/webcontactsocialimages/instagram.png`} alt='fackbook' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <h5 className="text text-center">Copyright @ 2021 by Reference Data.
                        <img src={logo_c} alt="logo" width="20px" height="20px"></img> All Rights Reserved.
                        By RBP Investments.</h5>
                </div>
            </React.StrictMode>
        )
    }
}
