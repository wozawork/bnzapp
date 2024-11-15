import React from 'react';
import './App.css';
import MainAppBar from './components/MainAppBar/MainAppBar';
import Home from './pages/Home/Home';
import CreditCards from './pages/CreditCards/CreditCards';
import GoldCard from './pages/Cards/GoldCard';
import PlatinumCard from './pages/Cards/PlatinumCard';
import Login from './pages/Login/Login';
import { PAGE_NAME } from './utils/constans';
import { Routes, Route, Link } from 'react-router-dom';
import MyAccount from './pages/MyAccount/MyAccount';
import Internal from './pages/Internal/Internal';
import { UserProvider } from './utils/Context/UserContext';
import Payment from './pages/Payment/PayTransfer';
import Payees from './pages/Payees/PayeesPage';
import PaymentTo from './pages/International/ToSelection';
import PaymentFrom from './pages/International/FromSelection';
import ConfirmPayment from './pages/Payment/ConfirmPayment';
import PaymentSummary from './pages/International/PaymentSummary';

function NoMatch() {
  return (
    <div>
      <h2>
        <Link to="/">Go to the home page</Link>
      </h2>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <div className="App">
        <MainAppBar />
        <div className="App-header">
          <Routes>
            <Route path={PAGE_NAME.HOME} element={<Home />} />
            <Route path={PAGE_NAME.CREDIT_CARDS} element={<CreditCards />} />
            <Route path={PAGE_NAME.GOLD_CARD} element={<GoldCard />} />
            <Route path={PAGE_NAME.PLATINUM_CARD} element={<PlatinumCard />} />
            <Route path={PAGE_NAME.LOGIN} element={<Login />} />
            <Route path={PAGE_NAME.ACCOUNT_DASHBOARD} element={<MyAccount />} />
            <Route path={PAGE_NAME.INTERNAL} element={<Internal />} />
            <Route path={PAGE_NAME.PAYMENT_TRANSFER} element={<Payment />} />
            <Route path={PAGE_NAME.PAYEES} element={<Payees />} />
            <Route path={PAGE_NAME.INTERNATIONAL_PAY_TO} element={<PaymentTo />} />
            <Route path={PAGE_NAME.INTERNATIONAL_PAY_FROM} element={<PaymentFrom />} />
            <Route path={PAGE_NAME.PAYMENT_CONFIRM} element={<ConfirmPayment />} />
            <Route path={PAGE_NAME.PAYMENT_SUMMARY} element={<PaymentSummary />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
