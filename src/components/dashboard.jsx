import "./dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [currentTime] = useState(() => {
    const now = new Date();

    // Get day with leading zero
    const day = now.getDate().toString().padStart(2, "0");

    // Get short weekday name like 'Mon', 'Tue'
    const weekday = now.toLocaleDateString("en-US", { weekday: "short" });

    // Get full year
    const year = now.getFullYear();

    // Get time in 12-hour format with minutes and AM/PM
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${day} ${weekday} ${year} | ${time}`;
  });

  return (<>
    <div className="container">
       <div className="time">
          <h1>Today</h1>
          <p>{currentTime}</p>
       </div>
    
       <div className="subscriptionDay">
          <h2>Free Trial with End In</h2>
          <h1>0 Days</h1>
         <div className="content">
            <p>Trial Expires: 03 Jun 2025</p>
             <button>Subscribe Now</button>
          </div>
       </div>    
  
 </div>
 
       <div className="midData">
          <h2>Download TrackDek Tracker to track time more efficiently.</h2>
         <div className="conten">
            <i className="bi bi-windows">Windows</i>
            <i className="bi bi-apple">Mac</i>
            <i className="bi bi-tux">Linux</i> 
            <i class="bi bi-box-arrow-down p">Download Now</i>
          </div>
          
       </div>   
 
     </>
  );
};

export default Dashboard;
