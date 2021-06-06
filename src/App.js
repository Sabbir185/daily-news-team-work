import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { loadData } from './redux/Actions/Actions';


function App() {

  const data = useSelector((state) => {
    console.log(state)
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [])


  return (
    <div>

    </div>
  );
}

export default App;
