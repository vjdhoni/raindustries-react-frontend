import './App.css';
import Home from './components/website/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/website/login';
import Invoice from './components/dashboard/invoice';
import NewInvoice from './components/dashboard/newinvoice';
import Authentication from '../src/components/utils/authentication';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", "/home"]} exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Authentication path="/invoice" exact component={Invoice} />
        <Authentication path="/new-invoice" exact component={NewInvoice} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
