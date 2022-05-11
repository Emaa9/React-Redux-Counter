import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  const increment =()=>{
    dispatch(actions.increment());
  }
  const decrement =()=>{
    dispatch(actions.decrement());
  }
  const addBy=()=>{
    dispatch(actions.addBy(10));
  }

  return (
    <div className='App'>
     <h1 className='counterapp'>Counter</h1>
     <h2 className='counter'>{counter}</h2>
     <button className="button" onClick={increment}>Increment</button>
     <button className="button" onClick={decrement}>Decrement</button>
     <button className="button3" onClick={addBy}>Add by 10</button>
    </div>
  );
}

export default App;
