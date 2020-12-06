import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      =
      <Switch>

        <Route exact path="/">

          <Home></Home>

        </Route>
        <Route path="/appointment">

          <Appointment></Appointment>

        </Route>
        <Route path="/dashboard/appointment">

        <Dashboard></Dashboard>

        </Route>


      </Switch>

    </Router>
  );
}

export default App;
