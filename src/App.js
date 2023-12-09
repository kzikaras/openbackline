import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Listing from "./components/Listing";
import { useEffect, useState } from "react";
import SearchPage from "./components/searchPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("open-backline-token") || "";
    console.log(user);
    if (user) {
      setLoggedIn(true);
    }
  }, [loggedIn]);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/listing/:id" element={<Listing />} />
    </Routes>
  );
}

export default App;
