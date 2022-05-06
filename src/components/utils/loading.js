import React, { Component } from 'react'

export default class Loading extends Component {

    constructor(props){ 
        super(props);
    }

    render() {
        return (
            <div className={`text-center`}><i className={`fa fa-spinner fa-spin`} style={{fontSize:`${this.props.fSize}`}}></i></div>
        )
    }
}
