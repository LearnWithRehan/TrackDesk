import React from 'react';
import ContentBodyHeader from './contentBodyHeader'; // Assuming this exists as per your provided code
import TableHeader from './TableHeader';
import Pagination from './Pagination';
import './styles.css'; // Optional: for basic styling

const TimeSheet = () => {
    return (
        <div className="time-sheet-container">
            <ContentBodyHeader /> {/* Your existing header component */}

            <div className="time-sheet-controls">
                <div className="entries-per-page">
                    <select className="select-entries">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50" selected>50</option>
                        <option value="100">100</option>
                    </select>
                    <span> Entries Per Page</span>
                </div>
                <div className="search-box">
                    <span>Search: </span>
                    <input type="text" placeholder="search" className="search-input" />
                </div>
            </div>

            <div className="time-sheet-table-wrapper">
                <table className="time-sheet-table">
                    <TableHeader /> {/* Table header row */}
                    <tbody>
                        <tr>
                            <td colSpan="6" className="no-data-message">No data available in table</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="time-sheet-footer">
                <div className="showing-entries-info">
                    Showing 0 to 0 of 0 entries
                </div>
                <Pagination /> {/* Pagination component */}
            </div>
        </div>
    );
};

export default TimeSheet;