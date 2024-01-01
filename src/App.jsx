import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./Pages/MovieDetail";
import Error from "./Pages/Error";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<MovieDetail />} />
      {/* if user visite any unkown page then show error page */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
