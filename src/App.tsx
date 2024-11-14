import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import BulletinBoard from "./pages/BulletinBoard";
import Introduction from "./pages/Introduction";
import LocalSemester from "./pages/LocalSemester/LocalSemester";
import Semester_create from "./pages/LocalSemester/Semester_create";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bulletinBoard" element={<BulletinBoard />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/localSemester" element={<LocalSemester />} />
          <Route path="/Semester-create" element={<Semester_create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
