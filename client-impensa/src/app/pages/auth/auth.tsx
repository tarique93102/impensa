import React, {Component} from 'react';
import './auth.scss';

interface AuthProps {};

interface AuthState {};

class Auth extends Component<AuthProps, AuthState> {
    render() {
        return(
            <div>
                Auth Page
            </div>
        );
    }
} 

export default Auth;