// import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home";
import StudentLogin from "./pages/userLogin/studentLogin/studentLogin";
import StudentRegister from "./pages/userLogin/studentRegister/studentRegister";
import TeacherLogin from "./pages/userLogin/teacherLogin/teacherLogin";
import TeacherRegister from "./pages/userLogin/teacherRegister/teacherRegister";
import UserOptions from "./pages/userLogin/userOptions";
import Create from "./pages/create/create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route element={<UserOptions />} path="/useroptions" />
          <Route element={<StudentLogin />} path="/studentlogin" />
          <Route element={<StudentRegister />} path="/studentregister" />
          <Route element={<TeacherLogin />} path="/teacherlogin" />
          <Route element={<TeacherRegister />} path="/teacherregister" />

          <Route element={<Create />} path="/create" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
