import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import AddNewMeetUp from "./pages/AddNewMeetUp";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/addNewMeetUp" element={<AddNewMeetUp />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
