import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import CallPage from "./components/CallPage/CallPage";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CallPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
