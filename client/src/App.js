import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CheckedInGuestList from './pages/CheckedInGuestList';
import AddGuest from './pages/AddGuest';
import GuestLogs from './pages/GuestLogs';
import Navigation from './component/Nav';
import GuestDetail from './pages/GuestDetail';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <CheckedInGuestList />
        </Route>
        <Route path='/logs'>
          <GuestLogs />
        </Route>
        <Route path='/new-guest'>
          <AddGuest />
        </Route>
        <Route path='/guest/:id'>
          <GuestDetail />
        </Route>
      </Switch>
    </Router>
    

  );
}

export default App;
