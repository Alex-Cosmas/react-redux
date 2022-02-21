import React from "react";

import { Routes, Route } from "react-router-dom";
import { Counter } from "./components/Counter";
import { CounterRedux } from "./components/CounterRedux";
import { Employees } from "./components/Employees";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { UserList } from "./components/UserList";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/employees"} element={<Employees />} />
          <Route path={"/counter"} element={<Counter />} />
          <Route path={"/counter-redux"} element={<CounterRedux />} />
          <Route path={"/user"} element={<UserList />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
