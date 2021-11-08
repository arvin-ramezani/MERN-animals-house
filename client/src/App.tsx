import React from "react";
import Home from "./pages/Home/Home";
// import AnimalRegistration from "./components/AnimalRegistration/AnimalRegistration";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Register from "./pages/Register/Register";
import { useAppSelector } from "./app/Hook";
import { selectUser } from "./features/user/userSlice";

function App() {
  const { userInfo } = useAppSelector(selectUser);

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register">
          {userInfo ? <Redirect to="/" /> : <Register login={false} />}
        </Route>
        <Route path="/login">
          {userInfo ? <Redirect to="/" /> : <Register login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
