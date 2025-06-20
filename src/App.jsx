import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./components/Onboarding";
import PatientDashboard from "./components/PatientDashboard";
import CaretakerDashboard from "./components/CaretakerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding/>} />
        <Route path="/patientdashboard" element={<PatientDashboard />} />
        <Route path="/caretakerdashboard" element={<CaretakerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
