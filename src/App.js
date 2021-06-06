import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { loadData } from './redux/Actions/Actions';


function App() {

  const data = useSelector((state) => state.dataReducer.data )

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [])

  console.log(data)

  return (
    <div>

    </div>
  );
}

export default App;
