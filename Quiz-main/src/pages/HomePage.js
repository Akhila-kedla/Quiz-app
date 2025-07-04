import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#fef6e4", fontFamily: "'Trebuchet MS', sans-serif" }}>
      <h1 style={{ fontSize: "3rem", color: "#ff6f61" }}>🌟 Ultimate Quiz Showdown</h1>
      <button onClick={() => navigate("/category")} style={{ padding: "0.8rem 2rem", fontSize: "1.2rem", marginTop: "2rem", backgroundColor: "#5f0f40", color: "white", border: "none", borderRadius: "10px", cursor: "pointer" }}>Start</button>
    </div>
  );
}