import React, {Component} from 'react';
import './investment.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface InvestmentProps {};

interface InvestmentState {};

class Investment extends Component<InvestmentProps & RouteComponentProps, InvestmentState> {
    render() {
        return(
            <div>
                Investment Page
            </div>
        );
    }
} 

const InvestmentPage = withRouter(Investment);

export default InvestmentPage;