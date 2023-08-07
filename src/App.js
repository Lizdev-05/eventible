import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import AddNewMeetUp from "./pages/AddNewMeetUp";
import Favorites from "./pages/Favorites";
import Nav from "./components/header/Nav";

const App = () => {
  return (
    <main className="w-full flex-center flex-col layout">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/addNewMeetUp" element={<AddNewMeetUp />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
