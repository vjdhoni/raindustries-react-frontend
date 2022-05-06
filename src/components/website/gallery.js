import React, { Component } from 'react'
import gallery from '../../styles/gallery.module.css'
import nat from '../../assets/nat.jpg'

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: nat
    }
  }

  coverImageChange = (img) => {
    this.setState({ img })
  }

  render() {
    const { img } = this.state;
    return (
      <>
        <div id='gallery' className={`${gallery.gallery}`}>
          <div className='container-fluid'>
            <h1 className='text text-center'>Gallery</h1>
            <div className={`${gallery.mainImg}`}>
              <img src={img} width={'100%'} height={'100%'} />
            </div>
            <div className='container'>
              <div className='row' style={{ padding: '10px' }}>
                <div className={`col-md-3 ${gallery.imgParent}`}>
                  <div className={`${gallery.imgGrid}`} onMouseOver={() => this.coverImageChange(nat)}><img src={nat} width={'100%'} height={'100%'} /></div>
                </div>
                <div className={`col-md-3 ${gallery.imgParent}`}>
                  <div className={`${gallery.imgGrid}`} onMouseOver={() => this.coverImageChange(nat)}><img src={nat} width={'100%'} height={'100%'} /></div>
                </div>
                <div className={`col-md-3 ${gallery.imgParent}`}>
                  <div className={`${gallery.imgGrid}`} onMouseOver={() => this.coverImageChange(nat)}><img src={nat} width={'100%'} height={'100%'} /></div>
                </div>
                <div className={`col-md-3 ${gallery.imgParent}`}>
                  <div className={`${gallery.imgGrid}`} onMouseOver={() => this.coverImageChange(nat)}><img src={nat} width={'100%'} height={'100%'} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
