import MedicationCalendar from "../components/MedicationCalendar";
import { useNavigate } from "react-router-dom";
import "/src/App.css";
const markedDates = {
  taken: ["2025-06-19"],
  missed: ["2025-06-01", "2025-06-03", "2025-06-06"]
};

function PatientDashboard() {
    const navigate = useNavigate();

  return (
    <>
    <div className="patient-dashboard px-2 sm:px-4 md:px-8">
      <header className="header flex flex-col sm:flex-row items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">MediCare Companion</h1>
        <div className="view-toggle flex items-center gap-2 mt-2 sm:mt-0">
          <span>Patient View</span>
          <button onClick={() => navigate("/caretakerdashboard")} className="switch-btn text-sm sm:text-base"><i className="fa-solid fa-users"></i> Switch to Caretaker</button>
        </div>
      </header>
      <section className="greeting-card mb-6">
        <div className="flex flex-row">
            <div><i className="fa-regular fa-user user-bg"></i></div>
            <div className="ml-3"> 
                <h1 className="font-bold text-2xl">Good Morning!</h1>
                <p>Ready to stay on track with your medication?</p>
            </div>
        </div>
        
        <div className="stats flex flex-col sm:flex-row gap-4 mt-4">
          <div className="stats-bg">
            <h3>0</h3>
            <span>Day Streak</span>
          </div>
          <div className="stats-bg">
            <h3>○</h3>
            <span>Today's Status</span>
          </div>
          <div className="stats-bg">
            <h3>0%</h3>
            <span>Monthly Rate</span>
          </div>
        </div>
      </section>
    
    <section className="medication-section">
        <h3> Today's Medication</h3>
        <div className="medication-box">
          <div className="med-info">
            <div className="pill-number">1</div>
            <div>
              <strong>Daily Medication Set</strong>
              <p>Complete set of daily tablets</p>
            </div>
            <div className="med-time"><i class="fa-regular fa-clock"></i> 8:00 AM</div>
          </div>
        </div>
    </section>
    </div>

    <div className="flex justify-center items-center w-full mt-6">
      <div className="w-full max-w-md">
        <MedicationCalendar markedDates={markedDates} className="" />
      </div>
    </div>
    </>
  );
}

export default PatientDashboard;