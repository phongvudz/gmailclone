import React from "react";
import { Routes, Route } from "react-router-dom";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";

const Router = () => {
  return (
    <Routes>
      <Route path="/mail" element={<Mail />} />
      <Route path="/" element={<EmailList />} />
    </Routes>
  );
};

export default Router;
