import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Report } from "./pages/Report";
import { Settings } from "./pages/Settings";
import { Upload } from "./pages/Upload";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
};
