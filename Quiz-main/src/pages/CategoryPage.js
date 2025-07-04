import React from "react";
import { useNavigate } from "react-router-dom";
import geoImg from "../assets/geography.jpg";
import filmImg from "../assets/film.jpg";
import historyImg from "../assets/history.jpg";
import sportsImg from "../assets/sports.jpg";
import politicsImg from "../assets/politics.jpg";

const categories = [
  { id: "22", name: "Geography", img: geoImg },
  { id: "11", name: "Film Industry", img: filmImg },
  { id: "23", name: "History", img: historyImg },
  { id: "21", name: "Sports", img: sportsImg },
  { id: "24", name: "Politics", img: politicsImg },
];

export default function CategoryPage() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "2rem", background: "#fff8dc", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem", color: "#2b2d42" }}>Choose Your Category</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
        {categories.map((cat) => (
          <div key={cat.id} onClick={() => navigate(`/quiz/${cat.id}`)} style={{ cursor: "pointer", border: "2px solid #ccc", borderRadius: "10px", padding: "1rem", textAlign: "center", width: "200px", background: "#edf2f4" }}>
            <img src={cat.img} alt={cat.name} style={{ width: "100%", borderRadius: "10px" }} />
            <h3 style={{ marginTop: "1rem", color: "#2b2d42" }}>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}