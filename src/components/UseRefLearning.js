import '../styles/App.css';
import {useEffect, useRef, useState} from "react";

function UseRefLearning () {
    const [name, setName] = useState('');
    const renderCount = useRef(1);
    const inputRef = useRef();
    const prevName = useRef('');

    /*useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });*/

    useEffect(() => {
        prevName.current = name;
    }, [name])

    function focus() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={ event => setName(event.target.value)} type="text"/>
            <div>My name is {name} and it used to be {prevName.current}</div>
            <button onClick={focus}>Focus</button>
            {/*<div>I rendered {renderCount.current}</div>*/}
        </>
    );
}

export default UseRefLearning;
