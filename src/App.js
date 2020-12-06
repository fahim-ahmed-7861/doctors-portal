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
import AllPatients from './Components/AllPatients/AllPatients';
import AddDoctor from './Components/AddDoctor/AddDoctor';

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

        <Route path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </Route>

          <Route path="/Add a Doctor">
           <AddDoctor></AddDoctor>
          </Route>


      </Switch>

    </Router>
  );
}

export default App;
