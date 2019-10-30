import React, {Component} from 'react';
import './about.scss';
import { withRouter, RouteComponentProps } from 'react-router';

interface AboutProps {};

interface AboutState {};

class About extends Component<AboutProps & RouteComponentProps, AboutState> {
    render() {
        return(
            <div>
                About Page
            </div>
        );
    }
} 

const AboutPage = withRouter(About);

export default AboutPage;