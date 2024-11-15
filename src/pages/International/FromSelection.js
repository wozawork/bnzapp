import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const PaymentFrom = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook
  const accounts = [
    { id: 1, label: "Savings", name: "Robert Wilson", balance: "$5.00" },
    { id: 2, label: "Daily", name: "Robert Wilson", balance: "$658.56" },
    { id: 3, label: "Transactional", name: "Robert Wilson", balance: "$26.27" },
  ];

  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountSelect = (account) => {
    setSelectedAccount(account);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlenext = (path) => {
    navigate(path); // Navigate to the selected path
  };

  const filteredAccounts = accounts.filter((account) =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.label}>From</span>
          <FaTimes style={styles.closeIcon} />
        </div>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            style={styles.searchInput}
          />
          <FaSearch style={styles.searchIcon} />
        </div>
        <div style={styles.accountsList}>
          <span style={styles.eligibleAccountsText}>
            Showing eligible accounts
          </span>
          {filteredAccounts.map((account) => (
            <div
              key={account.id}
              onClick={() => handleAccountSelect(account.id)}
              style={{
                ...styles.accountItem,
                backgroundColor:
                  selectedAccount === account.id ? "#e0f7fa" : "transparent",
                cursor: "pointer", // Highlight selected row
              }}
            >
              <div style={styles.accountLabel}>{account.label}</div>
              <div style={styles.accountInfoRow}>
                <span style={styles.accountName}>
                  {account.name || "Unnamed Account"}
                </span>
                <span style={styles.accountBalance}>
                  {account.balance || "Balance unavailable"} available
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.buttonWrapper}>
          <button
            style={styles.nextButton}
            onClick={() => handlenext("/international-pay-to")}
            disabled={!selectedAccount} // Disable the button if no account is selected
          >
            Next
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
    backgroundColor: "#f0f0f0",
  },
  container: {
    width: "400px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "24px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    position: "relative", // To allow positioning the Next button inside the container
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    color: "#000",
  },
  label: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  closeIcon: {
    cursor: "pointer",
    fontSize: "16px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    padding: "4px 8px",
    marginBottom: "16px",
  },
  searchInput: {
    border: "none",
    outline: "none",
    flex: 1,
    fontSize: "14px",
  },
  searchIcon: {
    color: "#888",
  },
  accountsList: {
    display: "flex",
    flexDirection: "column",
  },
  eligibleAccountsText: {
    marginBottom: "8px",
    color: "#666",
    fontSize: "20px",
  },
  accountItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Ensure items are spaced apart
    marginBottom: "12px",
    width: "100%",
  },
  accountLabel: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#666",
    marginRight: "12px",
  },
  accountInfoRow: {
    display: "flex",
    alignItems: "center", // Align account name and balance in the same row
    justifyContent: "space-between", // Spread the items within the row
    width: "100%", // Ensure the row takes up full width
  },
  accountInfo: {
    display: "flex",
    flexDirection: "column",
    color: "#000", // Visible text color
    flex: 1, // Let it take up the remaining space
    overflow: "hidden", // Prevent text overflow
    fontSize: "14px", // Make sure the font is visible
  },
  accountName: {
    fontSize: "16px",
    color: "#000",
    marginRight: "16px", // Add some space between the name and balance
  },
  accountBalance: {
    fontSize: "16px",
    color: "#000",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "24px", // To give space above the button
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

export default PaymentFrom;
