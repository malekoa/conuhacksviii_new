import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Location from "./screens/Location";
import EnvironmentSafetyDashboard from "./screens/EnvironmentSafetyDashboard";
import Bike from "./screens/Bike";
import Cars from "./screens/Cars";
import Safety from "./screens/Safety";
import SideBar from "./components/SideBar";
import { PostalCodeProvider } from "./context/PostalCodeContext";
import "./App.css";

function App() {
  return (
    <Router>
      <PostalCodeProvider>
        <div className="app-container">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="dashboard">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/location" element={<Location />} />
              <Route
                path="/environmentsafety"
                element={<EnvironmentSafetyDashboard />}
              />
              <Route path="/bike" element={<Bike />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/cars" element={<Cars />} />
            </Routes>
          </div>
        </div>
      </PostalCodeProvider>
    </Router>
  );
}

export default App;
