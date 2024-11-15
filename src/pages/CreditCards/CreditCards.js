import React, { useEffect } from 'react';
import './CreditCards.css';
import GoldNew from '../../utils/assets/GoldNew.png';
import PlatinumNew from '../../utils/assets/PlatinumNew.png';
import { Link } from 'react-router-dom';
import { PAGE_NAME, PAGE_CONTEXT } from '../../utils/constans';
import {
  changeContext,
  setCustomerSessionId,
  getTheCSID,
} from '../../utils/sdk';

export default function CreditCards() {
  useEffect(() => {
    changeContext(PAGE_CONTEXT.CREDIT_CARDS);
    setCustomerSessionId(getTheCSID());
  }, []);

  return (
    <div className="FeaturedCreditCards-Container fadeIn">
      <div>
        <h3>Featured Credit Cards</h3>
        <h5>Choose a credit card that works for you</h5>
      </div>
      <div className="creditCardsImg-Container">
        <div className="Card-Container">
          <Link to={PAGE_NAME.GOLD_CARD}>
            <img
              data-bb="gold-credit-card"
              src={GoldNew}
              className="creditCardImg"
              alt="Gold-Credit-Card"
            ></img>
          </Link>
          <div>
            <h3>DemoBank Gold</h3>
            <p className="innerCreditCard-Paragraph">
              A simple everyday credit card with 0$ annual fee in the first
              year.
            </p>
          </div>
        </div>
        <div className="Card-Container">
          <Link to={PAGE_NAME.PLATINUM_CARD}>
            <img
              data-bb="platinum-credit-card"
              src={PlatinumNew}
              className="creditCardImg"
              alt="PlatinumNew-Credit-Card"
            ></img>
          </Link>
          <div>
            <h3>DemoBank Platinum</h3>
            <p className="innerCreditCard-Paragraph">
              A simple everyday credit card with a low ongoing annual fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
