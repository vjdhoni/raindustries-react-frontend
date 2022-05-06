import React, { Component } from 'react'
import service from '../../styles/service.module.css'
import bg from '../../assets/bg.png'

export default class Service extends Component {
    render() {
        return (
            <div id='service' className={`${service.service}`}>
                <div className={`container ${service.body}`}>
                    <h1 className='text text-center'>Service</h1>
                    <div className={`row ${service.wrapper}`}>
                        <div className={`col-md-3 ${service.serImg}`}>
                            <img className={`img`} width={'100%'} height={'100%'} src={bg} />
                        </div>
                        <div className='col-md-9'>
                            <h3 className='text'>Transformer oil</h3>
                            <p className='text'>The solid insulation materials widely used in the transformer are paper, press- board, and transformer board, which are formed from the cellulose found in plants. Cellulose insulation with mineral oil has played a major role as the main insulation system for transformers for a very long time.</p>
                        </div>
                    </div>
                    <div className={`row ${service.wrapper}`}>
                        <div className={`col-md-3 ${service.serImg}`}>
                            <img className={`img`} width={'100%'} height={'100%'} src={bg} />
                        </div>
                        <div className='col-md-9'>
                            <h3 className='text'>Transformer oil</h3>
                            <p>The solid insulation materials widely used in the transformer are paper, press- board, and transformer board, which are formed from the cellulose found in plants. Cellulose insulation with mineral oil has played a major role as the main insulation system for transformers for a very long time.</p>
                        </div>
                    </div>
                    <div className={`row ${service.wrapper}`}>
                        <div className={`col-md-3 ${service.serImg}`}>
                            <img className={`img`} width={'100%'} height={'100%'} src={bg} />
                        </div>
                        <div className='col-md-9'>
                            <h3 className='text'>Transformer oil</h3>
                            <p>The solid insulation materials widely used in the transformer are paper, press- board, and transformer board, which are formed from the cellulose found in plants. Cellulose insulation with mineral oil has played a major role as the main insulation system for transformers for a very long time.</p>
                        </div>
                    </div>
                    <div className={`row ${service.wrapper}`}>
                        <div className={`col-md-3 ${service.serImg}`}>
                            <img className={`img`} width={'100%'} height={'100%'} src={bg} />
                        </div>
                        <div className='col-md-9'>
                            <h3 className='text'>Transformer oil</h3>
                            <p>The solid insulation materials widely used in the transformer are paper, press- board, and transformer board, which are formed from the cellulose found in plants. Cellulose insulation with mineral oil has played a major role as the main insulation system for transformers for a very long time.</p>
                        </div>
                    </div>
                    <div className={`row ${service.wrapper}`}>
                        <div className={`col-md-3 ${service.serImg}`}>
                            <img className={`img`} width={'100%'} height={'100%'} src={bg} />
                        </div>
                        <div className='col-md-9'>
                            <h3 className='text'>Transformer oil</h3>
                            <p>The solid insulation materials widely used in the transformer are paper, press- board, and transformer board, which are formed from the cellulose found in plants. Cellulose insulation with mineral oil has played a major role as the main insulation system for transformers for a very long time.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
