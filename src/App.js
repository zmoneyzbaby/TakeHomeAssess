import "antd/dist/antd.min.css";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
