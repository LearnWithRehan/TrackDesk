import { useState } from 'react';
import './ContentBodyHeader.css';

const ContentBodyHeader = () => {
  const [activeTab, setActiveTab] = useState('TODAY');

  // Default to today
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0]); 

  const formatDate = (date) => date.toISOString().split('T')[0];

  const handleTabClick = (tab) => {
    let newDate = new Date();
    switch (tab) {
      case 'YESTERDAY':
        newDate.setDate(today.getDate() - 1);
        break;
      case 'PAST 7 DAYS':
        newDate.setDate(today.getDate() - 6);
        break;
      case 'PAST 30 DAYS':
        newDate.setDate(today.getDate() - 29);
        break;
      case 'CUSTOM':
      
        break;
      default:
        newDate = today;
    }

    if (tab !== 'CUSTOM') {
      setSelectedDate(formatDate(newDate));
    }

    setActiveTab(tab);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setActiveTab('CUSTOM'); // Switch to CUSTOM when date is manually selected
  };

  return (
    <div className="content-body-header">
      <div className="header-navigation">
        {['TODAY', 'YESTERDAY', 'PAST 7 DAYS', 'PAST 30 DAYS', 'CUSTOM'].map((tab) => (
          <div
            key={tab}
            className={`nav-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
            {activeTab === tab && <span className="active-underline"></span>}
          </div>
        ))}
      </div>

      <div className="header-info">
        <div className="worked-time">
          Worked: <span>00:07:00</span> {/* You can replace this with dynamic time */}
        </div>
        <div className="date-picker">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            max={formatDate(today)} // Prevent selecting future dates
          />
        </div>
      </div>
    </div>
  );
};

export default ContentBodyHeader;
