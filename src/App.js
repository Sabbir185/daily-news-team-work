import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './components/Home/Home';
import { loadData } from './redux/Actions/Actions';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const data = useSelector((state) => state.dataReducer.data)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [])

  console.log(data)

  return (
    <Router>
      <Switch>
        <Route exact to="/">
          <Home/>
        </Route>
        <Route exact to="/home">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
