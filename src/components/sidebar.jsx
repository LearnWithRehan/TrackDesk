import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidebar.css";
import { GrProjects } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = ({ setActiveView, activeView }) => {
  return (
    <div
  className="d-flex flex-column flex-shrink-0 p-3 custom-sidebar"

      style={{ width: "280px", height: "100vh", fontSize: "20px", backgroundColor: "#fff" }}
    >
      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        onClick={() => setActiveView("home")}
      >
        <img
          src="./images/petals.jpeg"
          alt="Logo"
          width="50"
          height="43"
          className="me-2"
        />
        <span className="fs-4">Petals Tech</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${activeView === "home" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("home")}
          >
            <i className="bi bi-house-door-fill me-2"></i>
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${activeView === "dashboard" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("dashboard")}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${activeView === "timesheet" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("timesheet")}
          >
            <i className="bi bi-table me-2"></i>
            TimeSheet
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${activeView === "screenshot" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("screenshot")}
          >
            <i className="bi bi-window-fullscreen me-2"></i>
            ScreenShot
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${activeView === "projects" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("projects")}
          >
            <GrProjects style={{ marginRight: "10px" }} />
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${activeView === "teams" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("teams")}
          >
            <i className="bi bi-microsoft-teams me-2"></i>
            Teams
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${activeView === "reports" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("reports")}
          >
            <TbReportSearch style={{ marginRight: "10px" }} />
            Report
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${activeView === "timeoff" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("timeoff")}
          >
            <i className="bi bi-clock-history me-2"></i>
            TimeOff
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${activeView === "chat" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("chat")}
          >
            <i className="bi bi-chat-dots-fill me-2"></i>
            Chat (beta)
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${activeView === "notifications" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("notifications")}
          >
            <i className="bi bi-bell-slash-fill me-2"></i>
            Notification
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${activeView === "billing" ? "active" : "link-body-emphasis"}`}
            onClick={() => setActiveView("billing")}
          >
            <i className="bi bi-receipt-cutoff me-2"></i>
            Billing
          </a>
        </li>
      </ul>

      <hr />

      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="User avatar"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
