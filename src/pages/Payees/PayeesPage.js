import React, { useState, useEffect } from 'react';
import './PayeesPage.css'; // Import the CSS file
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import icon1 from './icon1.jpg'; // Import the image file
import icon2 from './icon2.jpg'; // Import the image file
import icon3 from './icon3.jpg'; // Import the image file
import icon4 from './icon4.jpeg'; // Import the image file
import icon5 from './icon5.webp'; // Import the image file
import icon6 from './icon6.jpeg'; // Import the image file
import { changeContext } from '../../utils/sdk';
import { PAGE_CONTEXT } from '../../utils/constans';

const samplePayees = [
  { id: 1, name: 'Alice Johnson', lastPaid: '2024-08-15', accountNumber: '01-4829-38472-11', image: icon1 },
  { id: 2, name: 'Bob Williams', lastPaid: '2024-09-05', accountNumber: '03-2938-48294-04', image: icon2 },
  { id: 3, name: 'Charlie Davis', lastPaid: '2024-07-22', accountNumber: '02-8374-92837-05', image: icon3 },
  { id: 4, name: 'Diana Evans', lastPaid: '2024-06-30', accountNumber: '05-7483-29384-12', image: icon4 },
  { id: 5, name: 'Ethan Clark', lastPaid: '2024-09-12', accountNumber: '07-2947-92837-09', image: icon5 },
  { id: 6, name: 'Fiona White', lastPaid: '2024-08-20', accountNumber: '09-8372-39483-02', image: icon6 }
];


export default function PayeesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [payees, setPayees] = useState(samplePayees);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    changeContext(PAGE_CONTEXT.PAYEES)
  }, []);


  const handleSearch = () => {
    console.log('Search term:', searchTerm);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePay = (path) => {

    navigate(path); // Navigate to the selected path
  };

  const handleDelete = (id) => {
    console.log('Delete button clicked for payee with id:', id);
    setPayees(payees.filter(payee => payee.id !== id));
  };

  return (
    <div className="payees-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Payee Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="table-container">
        <table className="payees-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Paid</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((payee) => (
              <tr key={payee.id}>
                <td>
                  <div className="payee-info">
                    <img src={icon1} className="payee-image" />
                    <div>
                      <div>
                      <span>{payee.name}</span>
                      </div>
                      
                      <small>{payee.accountNumber}</small>
                    </div>
                  </div>
                </td>
                <td>{payee.lastPaid}</td>
                <td>
                  <button onClick={() => handlePay('/payment-summary')} className="pay-button">Pay</button>
                  <button onClick={() => handleDelete(payee.id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-container">
        <button
          onClick={() => handleChangePage(page - 1)}
          disabled={page === 0}
          className="pagination-button"
        >
          Previous
        </button>
        <span>{`Page ${page + 1}`}</span>
        <button
          onClick={() => handleChangePage(page + 1)}
          disabled={page >= Math.ceil(payees.length / rowsPerPage) - 1}
          className="pagination-button"
        >
          Next
        </button>
        <select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          className="rows-per-page-select"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>
      </div>
    </div>
  );
}
