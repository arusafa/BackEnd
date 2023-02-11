import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Create from "./Create";
import DataDisplay from "./DataDisplay";
import LogInGbt from "./LogInGbt";
import AuthProvider from "./AuthProvider";

function AppRoutes() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/home/register/tutor" element={<Create />} />
              <Route path="/home/login/tutor" element={<LogInGbt />} />
              <Route
                path="home/register/tutor/result"
                element={<DataDisplay />}
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default AppRoutes;
