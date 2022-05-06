import React from 'react';
import { Route, Redirect  } from 'react-router-dom';

const Authentication = ({ component, ...rest }) => {

    var RenderingComponent = component;
    var hasToken = localStorage.getItem('role');
    return (
        <Route
            {...rest}
            render={
                props => {
                    return hasToken !== null ? (<RenderingComponent {...props} />) :
                        (<Redirect  to={{ pathname: '/', state: { from: props.location } }} />)
                }
            }
        />
    )
}

export default Authentication;