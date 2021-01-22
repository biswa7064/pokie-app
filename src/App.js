
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Cartoon from './containers/Cartoon';
import CartoonList from './containers/CartoonList';



function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to= '/cartoon/test'>Search</NavLink>
      </nav>
      <Switch>
        <Route path={'/'} exact component={CartoonList}/>
        <Route path='/cartoon/:cartoon' exact component={Cartoon}/>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default App;
