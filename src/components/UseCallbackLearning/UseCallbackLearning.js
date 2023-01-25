import '../../styles/App.css';
import {useCallback, useState} from "react";
import List from "./List";

export default function UseCallbackLearning() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
       return [number, number + 1, number + 2]
    }, [number]);

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    };

    return (
        <div style={themeStyles}>
            <input type="number" value={number} onChange={event => setNumber(Number(event.target.value))}/>
            <button onClick={() => setDark((prevDark) => !prevDark)}>Toggle Theme</button>
            <List getItems={getItems}/>
        </div>
    );
}
