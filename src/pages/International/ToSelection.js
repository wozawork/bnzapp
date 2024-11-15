import React, { useState } from "react";
import { FaSearch, FaTimes, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const PaymentTo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("payees");
  const [selectedPayee, setSelectedPayee] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const payees = [
    {
      id: 1,
      label: "MN",
      name: "Muhunthan Nagesh",
      currency: "GBP",
      accountid: "0762789458",
    },
  ];

  const handlenext = (path) => {
    navigate(path); // Navigate to the selected path
  };

  const handlePayeeSelect = (payee) => {
    setSelectedPayee(payee);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPayees = payees.filter((payee) =>
    payee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.label}>To</span>
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

        <div style={styles.tabs}>
          <button
            onClick={() => setActiveTab("payees")}
            style={activeTab === "payees" ? styles.activeTab : styles.tab}
          >
            Payees
          </button>
          <button
            onClick={() => setActiveTab("accounts")}
            style={activeTab === "accounts" ? styles.activeTab : styles.tab}
          >
            Accounts
          </button>
        </div>

        {activeTab === "payees" && (
          <div style={styles.payeesList}>
            <div style={styles.addPayee}>
              <div style={styles.iconContainer}>
                <div style={styles.payeeIcon}>
                  <FaPlus style={styles.addIcon} />
                </div>
              </div>
              <div>
                <span style={styles.addPayeeSubText}>Create a new payee</span>
              </div>
            </div>

            {filteredPayees.map((payee) => (
              <div 
              key={payee.id} 
              onClick={() => handlePayeeSelect(payee.id)}
              style={{
                ...styles.payeeItem,
                backgroundColor:
                  selectedPayee === payee.id ? "#e0f7fa" : "transparent",
                cursor: "pointer", // Highlight selected row
              }}
              >
                <div style={styles.iconContainer}>
                  <div style={styles.payeeIcon}>{payee.label}</div>
                </div>
                <div style={styles.payeeDetails}>
                  <div style={styles.accountName}>{payee.name}</div>
                  <div style={styles.accountName}>{payee.accountid}</div>
                  <div style={styles.accountNumber}>{payee.currency}</div>
                </div>
              </div>
            ))}
        <div style={styles.buttonWrapper}>
          <button
            style={styles.nextButton}
            onClick={() => handlenext("/payment-summary")}
            disabled={!selectedPayee} // Disable the button if no account is selected
          >
            Confirm Payment
          </button>
        </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  accountName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#888",
    alignItems: "left",
    textAlign: "left",
  },
  accountNumber: {
    fontSize: "14px",
    color: "#888",
    textAlign: "left",
  },
  currency: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#666",
    textAlign: "right", // Aligns currency to the right
  },
  payeeDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Ensures vertical layout of account name and number
    width: "100%", // Take up remaining space
  },

  iconContainer: {
    marginRight: "16px",
  },
  payeeIcon: {
    width: "70px",
    height: "70px",
    borderRadius: "0%",
    backgroundColor: "#007bff", // Blue background for initials
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#e5ef2", // White text for initials
    fontSize: "18px",
    fontWeight: "bold",
  },
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Vertically center the component
    backgroundColor: "#f8f8f8", // Optional background to contrast
  },
  container: {
    width: "400px", // Increased size
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "24px", // Added more padding to make it feel bigger
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Slight shadow for depth
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    color: "#000", // Darker text color
  },
  label: {
    fontSize: "22px", // Larger font size for label
    fontWeight: "bold",
  },
  closeIcon: {
    cursor: "pointer",
    fontSize: "18px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    padding: "6px 10px",
    marginBottom: "16px",
  },
  searchInput: {
    border: "none",
    outline: "none",
    flex: 1,
    fontSize: "16px", // Increased input font size
  },
  searchIcon: {
    color: "#888",
  },
  tabs: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  tab: {
    flex: 1,
    padding: "10px 0", // Larger padding
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    border: "1px solid #e0e0e0",
    cursor: "pointer",
  },
  activeTab: {
    flex: 1,
    padding: "10px 0",
    textAlign: "center",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "1px solid #007bff",
    cursor: "pointer",
  },
  payeesList: {
    display: "flex",
    flexDirection: "column",
  },
  addPayee: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    cursor: "pointer",
  },
  addIcon: {
    fontSize: "22px",
    color: "#e5ef2",
    marginRight: "8px",
  },
  addPayeeText: {
    fontWeight: "bold",
    color: "#007bff",
  },
  addPayeeSubText: {
    color: "#666",
    fontSize: "14px",
  },
  payeeItem: {
    display: "flex",
    alignItems: "left",
    marginBottom: "12px",
  },
  payeeLabel: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#666",
    marginRight: "12px",
  },
  payeeInfo: {
    display: "flex",
    flexDirection: "column",
  },
  nextButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    alignItems: "right",
    marginRight: "0px",
  },
};

export default PaymentTo;



