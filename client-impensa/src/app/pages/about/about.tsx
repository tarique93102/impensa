import React, {Component} from 'react';
import './about.scss';

interface AboutProps {};

interface AboutState {};

class About extends Component<AboutProps, AboutState> {
    render() {
        return(
            <div>
                About Page
            </div>
        );
    }
} 

export default About;