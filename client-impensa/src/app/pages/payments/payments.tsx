import React, {Component} from 'react';
import './payments.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface PaymentsProps {};

interface PaymentsState {};

class Payments extends Component<PaymentsProps & RouteComponentProps, PaymentsState> {
    render() {
        return(
            <div>
                Payments Page
            </div>
        );
    }
} 

const PaymentsPage = withRouter(Payments);

export default PaymentsPage;