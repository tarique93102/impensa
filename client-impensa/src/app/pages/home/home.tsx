import React, {Component} from 'react';
import './home.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface HomeProps {};

interface HomeState {};

class Home extends Component<HomeProps & RouteComponentProps, HomeState> {
    render() {
        console.log(this.props);
        return(
            <div>
                Home Page
            </div>
        );
    }
} 

const HomePage = withRouter(Home);

export default HomePage;