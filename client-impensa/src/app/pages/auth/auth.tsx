import React, {Component} from 'react';
import './auth.scss';
import { withRouter, RouteComponentProps } from 'react-router';

interface AuthProps {};

interface AuthState {};

class Auth extends Component<AuthProps & RouteComponentProps, AuthState> {
    render() {
        return(
            <div>
                Auth Page
            </div>
        );
    }
} 

const AuthPage = withRouter(Auth);

export default AuthPage;