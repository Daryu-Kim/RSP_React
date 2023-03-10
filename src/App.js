import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Select from "./pages/SelectPage";
import Result from "./pages/ResultPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Select />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
