import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Tv from "./components/Tv";
import Movies from "./components/Movies";
import Sports from "./components/Sports";
import Kids from "./components/Kids";
import Disney from "./components/Disney";
import "./index.css";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/tv" element={<Tv />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/sports" element={<Sports />} />
        <Route exact path="/disney" element={<Disney />} />
        <Route exact path="/kids" element={<Kids />} />
      </Routes>
    </>
  );
}

export default App;
