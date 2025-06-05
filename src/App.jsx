import { useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Home from './components/home';
import Dashboard from './components/dashboard';
import TimeSheet from './components/timesheet';
import ScreenShot from './components/screenshot';
import Projects from './components/projects';
import Teams from './components/teams';
import Reports from './components/report';
import TimeOff from './components/timeoff';
import Chat from './components/chat';
import Notification from './components/notification';
import Billing from './components/billing';

import './App.css';

function App() {
  const [activeView, setActiveView] = useState("home");

  const renderContent = () => {
    switch (activeView) {
      case "home":
        return <Home />;
      case "dashboard":
        return <Dashboard />;
      case "timesheet":
        return <TimeSheet />;
      case "screenshot":
        return <ScreenShot />;
      case "project":
        return <Projects />;
      case "team":
        return <Teams />; 
      case "reports":
        return <Reports />;
      case "timeoff":
        return <TimeOff />;
      case "chat":
        return <Chat />;
      case "notification":
        return <Notification />;
      case "billing":
        return <Billing />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar setActiveView={setActiveView} activeView={activeView} />
      <div className="main-content">
        <Header activeView={activeView} /> 
        <div className="content-body">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
