import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Login from "./Component/Login/Login";
import GoogleAuth from "./Projects/Auth/GoogleAuth";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "white" }}>
        Firebase Authentication
      </h1>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/login" element={<GoogleAuth />} />
      </Routes>
    </div>
  );
}

export default App;
