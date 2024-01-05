import { useDispatch } from 'react-redux';
import { useSelector } from '../redux/store.ts'
import { decrement, increment } from "../redux/counterSlice.ts";
import './Box.css'

function BoxB() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const incre = () => dispatch(increment());
  const decre = () => dispatch(decrement());

  return (
    <div id="boxB" className="box">
        <h2>コンポーネントB</h2>
        <h2>Count: {count}</h2>
        <button onClick={incre}>+</button>
        <button onClick={decre}>-</button>
    </div>
  )
}

export default BoxB
