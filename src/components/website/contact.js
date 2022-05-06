import React, { Component } from 'react'
import contact from '../../styles/contact.module.css'

export default class Contact extends Component {
  render() {
    return (
      <>
        <div id='contact' className={`${contact.contact}`}>
          <div className='container'>
            <h1 className='text text-center'>Contact</h1>
          </div>
        </div>
      </>
    )
  }
}
