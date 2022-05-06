import React, { Component } from 'react'
import about from '../../styles/about.module.css'
import pro from '../../assets/nat.jpg'
import fb from '../../assets/fb.png'
import insta from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'

export default class About extends Component {
  render() {
    return (
      <div id='about' className={`${about.about}`}>
        <div className='container'>
          <h1 className='text text-center'>About</h1>
          <div className={`row ${about.card_wrapper}`}>
            <div className={`col-md-4 ${about.card}`}>
              <div className={`${about.profile}`}>
                <img src={pro} width={`100%`} height={`100%`} />
              </div>
              <div>
                <h3 className='text'>R.A Manikandan</h3>
                <h5 className='text'>Founder of R.A Industries</h5>
              </div><br />
              <h4>Social Links</h4>
              <div className='row' style={{ margin: '10px' }}>
                <div className='col-md-4'>
                  <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                    <img className='img img-responsive img-circle' width={`100%`} height={`100%`} src={fb} alt='fackbook' />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                    <img className='img img-responsive img-circle' width={`100%`} height={`100%`} src={insta} alt='fackbook' />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                    <img className='img img-responsive img-circle' width={`100%`} height={`100%`} src={twitter} alt='fackbook' />
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-4 ${about.card}`}>
              <div className={`${about.profile}`}>
                <img src={pro} width={`100%`} height={`100%`} />
              </div>
              <div>
                <h3 className='text'>K Manikandan</h3>
                <h5 className='text'>Co-Founder of R.A Industries</h5>
              </div><br />
              <h4>Social Links</h4>
              <div className='row' style={{ margin: '10px' }}>
                <div className='col-md-4'>
                  <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                    <img className='img img-responsive img-circle' width={`100%`} height={`100%`} src={fb} alt='fackbook' />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                    <img className='img img-responsive img-circle' width={`100%`} height={`100%`} src={insta} alt='fackbook' />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                    <img className='img img-responsive img-circle' width={`100%`} height={`100%`} src={twitter} alt='fackbook' />
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-4 ${about.card}`}>
              <div className={`${about.profile}`}>
                <img src={pro} width={`100%`} height={`100%`} />
              </div>
              <div>
                <h3 className='text'>Mathavan</h3>
                <h5 className='text'>Manager of R.A Industries</h5>
              </div><br />
              <h4>Social Links</h4>
              <div className='row' style={{ margin: '10px' }}>
                <div className='col-md-4'>
                  <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                    <img className='img img-responsive img-circle' width={`100%`} height={`100%`} src={fb} alt='fackbook' />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                    <img className='img img-responsive img-circle' width={`100%`} height={`100%`} src={insta} alt='fackbook' />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div style={{ cursor: 'pointer', width: '60px', height: '60px', border: '2px solid white', borderRadius: '100px', boxShadow: '0px 0px 10px rgba(215,215,215,0.9)' }}>
                    <img className='img img-responsive img-circle' width={`100%`} height={`100%`} src={twitter} alt='fackbook' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
