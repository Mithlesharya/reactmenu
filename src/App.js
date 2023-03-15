import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Report from "./components/Report";
import Calendar from "./components/Calendar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/report" element={<Report />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
