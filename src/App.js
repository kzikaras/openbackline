import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Listing from "./components/Listing";
import AddListing from "./components/AddListing";
import SignUp from "./components/SignUp";
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
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/listing/:id" element={<Listing />} />
      <Route path="/new_listing" element={<AddListing />} />
    </Routes>
  );
}

export default App;
