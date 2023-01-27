import '../styles/App.css';
import {useState} from "react";

function UseStateLearning() {
    const [car, setCar] = useState('Tesla');
    const cars = ['volvo', 'range', 'bmw', 'rolce royce'];
    const [count, setCount] = useState(0);
    //another way to set initial state using a function
    // const [count, setCount] = useState(() => console.log('only runs one time, not on every render!'));

    function decrementCount() {
        // setCount(count -1 ) <- incorrect way to do because if you call it twice in a row you get an unexpected result.
        //any time you are modifying your state by using the previous value, you need to use the function version of setting your state
        setCount((prevState) => prevState - 1); //better way to do it
    }

    function incrementCount() {
        setCount((prevState) => prevState + 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
            <select value={car} onChange={(e) => setCar(e.target.value)}>
                {cars.map((car) => <option key={car} value={car}>{car}</option>)}
            </select>
            <h1>My Chosen Car is: {car}</h1>
        </>
    );
}

export default UseStateLearning;
