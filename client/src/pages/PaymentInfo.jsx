import {useEffect} from 'react';
import PaymentHeader from '../components/PaymentHeader';
import '../styles/PaymentInfo.css';
import BookingSummary from '../components/BookingSummary';
import PriceDetail from '../components/PriceDetail';
import TermsAndConditions from '../components/T&C';
import RentalDetail from '../components/RentalDetail';
import PaymentMethod from '../components/PaymentMethod';
import CancellationPolicy from './CancellationPolicy';

const PaymentInfo = () =>{

     useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    return(
        <div className="paymentcontainer">
            <PaymentHeader />

            <div className="page-content">
            <div className="leftside-content">
            <BookingSummary />
            <RentalDetail />
            <PaymentMethod />
            <CancellationPolicy />
            </div>
            <div className="rightside-content">
                <PriceDetail />
                <TermsAndConditions />
            </div>
            </div>

        </div>
    )

}
export default PaymentInfo;