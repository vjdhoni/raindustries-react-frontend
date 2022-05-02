import React, { Component } from 'react'
import Navigation from './navigation'
import img1 from '../../assets/bg2.jpg'
import home from '../../styles/home.module.css'

export default class Home extends Component {
    render() {
        return (
            <>
                <Navigation page='0' />
                <div className={`${home.home}`}>
                    <div className={`${home.header}`}>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-5'><img src={img1} /></div>
                                <div className='col-md-7'>
                                    <br /><br /><br /><br />
                                    <h1 className='text'>Insulation materials used in transformers</h1>
                                    <p>Insulation materials are one of the most important elements in a transformer.
                                        They are used to electrically separate the conducting parts of a transformer from each other and from other components.
                                        Internal insulation failures are the major cause of transformer failures. This article intends to give you an overview of insulation materials used in transformers.</p><br /><br />
                                    <h2 className='text text-center'>
                                        <q>If your hate could be turned into electricity,
                                            <br />
                                            it would light up the whole world.</q>
                                        <br />
                                        <small>-Nekola Tesla</small>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
