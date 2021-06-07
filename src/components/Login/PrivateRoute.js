import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';


const PrivateRoute = ({ children, ...rest }) => {

    const userInfo = useSelector((state) => state.userReducer.userInfo)

    // console.log(userInfo.name)
    // console.log(userInfo.email)
    // console.log(userInfo.name)

    return (
        <Route
            {...rest}
            render={({ location }) =>
            userInfo.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};


export default PrivateRoute;