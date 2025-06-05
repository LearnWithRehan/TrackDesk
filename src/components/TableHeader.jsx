import React from 'react';
import "./styles.css"; // Ensure this path is correct

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="sortable-header">
                    Member details
                    <div className="sort-arrows"> {/* Use the new class here */}
                        <span className="sort-arrow">▲</span>
                        <span className="sort-arrow">▼</span>
                    </div>
                </th>
                <th className="sortable-header">
                    Team
                    <div className="sort-arrows">
                        <span className="sort-arrow">▲</span>
                        <span className="sort-arrow">▼</span>
                    </div>
                </th>
                <th className="sortable-header">
                    Clock In
                    <div className="sort-arrows">
                        <span className="sort-arrow">▲</span>
                        <span className="sort-arrow">▼</span>
                    </div>
                </th>
                <th className="sortable-header">
                    Clock out
                    <div className="sort-arrows">
                        <span className="sort-arrow">▲</span>
                        <span className="sort-arrow">▼</span>
                    </div>
                </th>
                <th className="sortable-header">
                    Total time
                    <div className="sort-arrows">
                        <span className="sort-arrow">▲</span>
                        <span className="sort-arrow">▼</span>
                    </div>
                </th>
                <th className="sortable-header">
                    Track
                    <div className="sort-arrows">
                        <span className="sort-arrow">▲</span>
                        <span className="sort-arrow">▼</span>
                    </div>
                </th>
            </tr>
        </thead>
    );
};

export default TableHeader;