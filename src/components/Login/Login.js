import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import logo from '../../images/Group 573.png'
import './Login.css'
import HeaderNav from '../shared/HeaderNav/HeaderNav';
import { useHistory, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/Actions/Actions';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {

    let history = useHistory();
    // let location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };

    const dispatch = useDispatch();

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            const {displayName, email, photoURL} = result.user;
            const googleUserInfo = {name: displayName, email, photoURL};
            history.push('/home')
            dispatch(userLogin(googleUserInfo))
        }).catch((error) => {
            const errorMessage = error.message;
        });
    }

    return (
        <>
            <HeaderNav />
            <section className="d-flex justify-content-center">
                <div className="login">
                    <h4  onClick={handleGoogleSignIn}> <img src={logo} alt="" srcset="" className="img-fluid" /> continue with <span>Google</span></h4>
                </div>
            </section>
        </>
    );
};

export default Login;