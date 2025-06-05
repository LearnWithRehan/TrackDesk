import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./header.css";

const Header = ({ activeView }) => {
  const items = [
    "Gyanendra Tiwari", "Rehan Khan", "Shashank Shekhar Singh",
    "Alok kumar", "Om Babu Prasad", "Amit Tiwari"
  ];

  const notifications = [
    {
      text: "You have a request from Petals Infotech",
      time: "6d ago",
      status: "You accepted the request.",
    },
    {
      text: "You have a request from Petals Infotech",
      time: "1w ago",
      status: "You accepted the request.",
    },
  ];

  const viewTitles = {
    home: "Home",
    dashboard: "Dashboard",
    reports: "Reports",
    teams: "Teams",
    screenshot: "Screenshot",
    timesheet: "Timesheet",
    chat: "Chat (Beta)",
    billing: "Billing",
    notifications: "Notifications",
    timeoff: "Time Off",
    projects: "Projects"
  };

  return (
    <header className="p-3 mb-3 border-bottom bg-white header">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          
          {/* Selected view title */}
          <h5 className="mb-0">
            {viewTitles[activeView] || "Petals Tech"}
          </h5>

          {/* Right side controls */}
          <div className="d-flex align-items-center ms-auto gap-3">

            {/* Items Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-outline-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Items
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {items.map((item, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notification Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-link position-relative dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-bell fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end p-2" style={{ width: "300px" }}>
                <li className="fw-bold text-center mb-2">Notifications</li>
                {notifications.map((note, idx) => (
                  <li key={idx} className="dropdown-item border-bottom small">
                    <div>{note.text}</div>
                    <div className="text-muted">{note.status}</div>
                    <div className="text-muted text-end"><small>{note.time}</small></div>
                  </li>
                ))}
                <li className="text-center mt-2">
                  <a href="#" className="text-decoration-none small">View all notifications</a>
                </li>
              </ul>
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
