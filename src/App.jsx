import React from "react";
import { publicRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        {publicRoutes.map((item, index) => {
          console.log("hello");
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <item.layout>
                  <item.component></item.component>
                </item.layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
};
export default App;
