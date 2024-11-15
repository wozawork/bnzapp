import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const PaymentSummary = () => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = () => {
    // Logic for navigating to the confirmation page
    navigate("/payment-confirm");
  };

  const fromAccount = {
    name: "John Doe Savings",
    balance: "$5000",
    accountNumber: "12345678",
    currency: "USD",
    label: "JD"
  };

  const toPayee = {
    name: "Jane Smith",
    payeeId: "987654321",
    currency: "USD",
    label: "JS"
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.label}>Payment Summary</span>
          <FaTimes style={styles.closeIcon} />
        </div>

        {/* From Account */}
        <div style={styles.payeeItem}>
          <div style={styles.iconContainer}>
            <div style={styles.payeeIcon}>{fromAccount.label}</div>
          </div>
          <div style={styles.payeeDetails}>
            <div style={styles.accountName}>{fromAccount.name}</div>
            <div style={styles.accountNumber}>
              {fromAccount.label} - {fromAccount.balance} available
            </div>
          </div>
        </div>

        {/* To Payee */}
        <div style={styles.payeeItem}>
          <div style={styles.iconContainer}>
            <div style={styles.payeeIcon}>{toPayee.label}</div>
          </div>
          <div style={styles.payeeDetails}>
            <div style={styles.accountName}>{toPayee.name}</div>
            <div style={styles.accountNumber}>
              {toPayee.accountid} ({toPayee.currency})
            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div style={styles.inputWrapper}>
          <label style={styles.inputLabel}>Transfer Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
            style={styles.amountInput}
          />
        </div>

        {/* Next Button */}
        <div style={styles.buttonWrapper}>
          <button
            style={styles.nextButton}
            onClick={() => handleSubmit("/payment-confirm")}
            disabled={!amount} // Disable the button if amount is not entered
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
  },
  container: {
    width: "400px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "24px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    color: "#000",
  },
  label: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  closeIcon: {
    cursor: "pointer",
    fontSize: "18px",
  },
  payeeItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  iconContainer: {
    marginRight: "16px",
  },
  payeeIcon: {
    width: "70px",
    height: "70px",
    borderRadius: "0%",
    backgroundColor: "#007bff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
  },
  payeeDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  accountName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#888",
  },
  accountNumber: {
    fontSize: "14px",
    color: "#888",
  },
  inputWrapper: {
    marginTop: "24px",
    marginBottom: "24px",
  },
  inputLabel: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "8px",
    display: "block",
  },
  amountInput: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #e0e0e0",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  nextButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default PaymentSummary;
