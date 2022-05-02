import './App.css';
import Home from './components/website/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", "/home"]} exact component={Home} />
      </Switch></BrowserRouter>
  );
}

export default App;
