import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Projects/Auth/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
