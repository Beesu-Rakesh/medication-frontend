import { useNavigate } from "react-router-dom";
import "/src/App.css";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container px-2 sm:px-4 md:px-8">
      <h1 className="page-heading text-2xl sm:text-2xl md:text-4xl">Welcome to MediCare Companion</h1>
      <p className="page-subtitle text-base sm:text-lg">
        Your trusted partner in medication management. Choose your role to get
        started with personalized features.
      </p>

      <div className="card-container flex flex-wrap justify-center gap-4 mt-8">
        {/* Patient Card */}
        <div className="role-card patient ">
          <div className="role-icon">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2h19.2V19.2c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <h2 className="role-title text-blue-700">I'm a Patient</h2>
          <p className="role-desc">Track your medication schedule and maintain your health records</p>
          <ul className="feature-list list-disc">
            <li>Mark medications as taken</li>
            <li>Upload proof photos (optional)</li>
            <li>View your medication calendar</li>
            <li>Large, easy-to-use interface</li>
          </ul>
          <button
            onClick={() => navigate("/patientdashboard")}
            className="continue-btn patient"
          >
            Continue as Patient
          </button>
        </div>

        {/* Caretaker Card */}
        <div className="role-card caretaker">
          <div className="role-icon">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2h19.2V19.2c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <h2 className="role-title text-green-700">I'm a Caretaker</h2>
          <p className="role-desc">Monitor and support your loved one's medication adherence</p>
          <ul className="feature-list list-disc">
            <li>Monitor medication compliance</li>
            <li>Set up notification preferences</li>
            <li>View detailed reports</li>
            <li>Receive email alerts</li>
          </ul>
          <button
            onClick={() => navigate("/caretakerdashboard")}
            className="continue-btn caretaker"
          >
            Continue as Caretaker
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
