import React from "react";
import { publicRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";
import MainLayoutAdmin from "./lib/layouts/layouts.admin";
import Admin from "./routes/admin";
import CreateGame from "./routes/admin/creategame";
import MainLayoutUser from "./lib/layouts/layouts.user";
import User from "./routes/user";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>1</div>}></Route>
      <Route
        path="/user"
        element={
          <MainLayoutUser>
            <User></User>
          </MainLayoutUser>
        }
      ></Route>
      <Route
        path="/admin-dashboard"
        element={
          <MainLayoutAdmin>
            <Admin></Admin>
          </MainLayoutAdmin>
        }
      ></Route>
      <Route
        path="/admin-creategame"
        element={
          <MainLayoutAdmin>
            <CreateGame></CreateGame>
          </MainLayoutAdmin>
        }
      ></Route>
    </Routes>
  );
};
export default App;
