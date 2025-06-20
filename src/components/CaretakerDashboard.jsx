import "/src/App.css";
import { useNavigate } from "react-router-dom";

const CaretakerDashboard = () => {
    const navigate = useNavigate();

  return (
    <>
    <div className="caretaker-dashboard px-2 sm:px-4 md:px-8">
      {/* Header */}
      <header className="header flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">MediCare Companion</h1>
        <div className="role-switch flex items-center gap-2 mt-2 sm:mt-0">
          <span>Caretaker View</span>
          <button onClick={() => navigate("/patientdashboard")} className="switch-btn text-sm sm:text-base"><i class="fa-regular fa-user"></i> Switch to Patient</button>
        </div>
      </header>

      {/* Dashboard Banner */}
      <section className="dashboard-banner">
        <div className="flex flex-row">
            <div><i className="fa-solid fa-users user-bg"></i></div>
            <div className="ml-3">
                <h1 className="font-bold text-2xl">Caretaker Dashboard</h1>
                <p>Monitoring Eleanor Thompson's medication adherence</p>
            </div>
        </div>
        
        <div className="stats flex flex-col sm:flex-row gap-4 mt-4">
          <div className="stats-bg flex-1"><h3>85%</h3><span>Adherence Rate</span></div>
          <div className="stats-bg flex-1"><h3>5</h3><span>Current Streak</span></div>
          <div className="stats-bg flex-1"><h3>3</h3><span>Missed This Month</span></div>
          <div className="stats-bg flex-1"><h3>4</h3><span>Taken This Week</span></div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="tab-nav sm:m-none">
        <button className="active">Overview</button>
        <button>Recent Activity</button>
        <button>Calendar View</button>
        <button>Notifications</button>
      </div>

      {/* Today's Status */}
      <section className="status-section">
        <h3>Today's Status</h3>
        <div className="status-box">
          <div>
            <strong>Daily Medication Set</strong>
            <p>8:00 AM</p>
          </div>
          <span className="pending-badge">Pending</span>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-box"><i class="fa-regular fa-envelope"></i> Send Reminder Email</div>
        <div className="action-box"><i class="fa-regular fa-bell"></i> Configure Notifications</div>
        <div className="action-box"><i class="fa-regular fa-calendar"></i> View Full Calendar</div>
      </section>

      {/* Monthly Progress */}
      <section className="progress-section">
        <h1 className="text-2xl">Monthly Adherence Progress</h1>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: "85%" }}></div>
        </div>
        <div className="progress-labels">
          <span >22 days Taken</span>
          <span >3 days Missed</span>
          <span >5 days Remaining</span>
        </div>
      </section>
    </div>
    </>
  );
};

export default CaretakerDashboard;
