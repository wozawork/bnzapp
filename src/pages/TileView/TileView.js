import React from 'react';
import './TileView.css'; // For custom styles

import everyday from '../../utils/assets/everyday.jpeg'; 
import platinumVisa from '../../utils/assets/platinum-visa.jpeg';
import bills from '../../utils/assets/bills.jpeg';
import savings from '../../utils/assets/savings.jpg';
import fixedHomeLoan from '../../utils/assets/fixed-home-loan.jpeg';
import youWealth from '../../utils/assets/youwealth.jpg';
import totalMoneyLoan from '../../utils/assets/totalmoney-loan.jpg';
import termDeposit from '../../utils/assets/term-deposit.jpg';
import kiwiSaver from '../../utils/assets/kiwisaver.jpeg';

const accounts = [
  { name: 'Everyday', balance: 80.00, image: everyday },
  { name: 'Platinum VISA', balance: -1000.00, image: platinumVisa },
  { name: 'Bills', balance: 20.00, image: bills },
  { name: 'Savings', balance: 0.00, image: savings },
  { name: 'Fixed home loan', balance: -100000.00, image: fixedHomeLoan },
  { name: 'YouWealth', balance: 150036.87, image: youWealth },
  { name: 'TotalMoney Loan', balance: -200000.00, image: totalMoneyLoan },
  { name: 'Term Deposit', balance: 50000.00, image: termDeposit },
  { name: 'KiwiSaver', balance: 20853.12, image: kiwiSaver }
];

const TileView = () => {
  return (
    <div className="tile-container">
      <div className="overall-balance">Overall: -100,863.13</div>
      <div className="tile-grid">
        {accounts.map((account, index) => (
          <div className="tile" key={index}>
            <img src={account.image} alt={account.name} className="tile-image" />
            <div className="tile-details">
              <p className="tile-name">{account.name}</p>
              <p className={`tile-balance ${account.balance < 0 ? 'negative' : 'positive'}`}>
                {account.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        ))}
        <div className="tile add-account">
          <p>Add an account</p>
        </div>
      </div>
    </div>
  );
};

export default TileView;
