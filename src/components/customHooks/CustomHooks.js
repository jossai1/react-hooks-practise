import {useState} from "react";
import useLocalStorage from "./UseLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

export default function CustomHooks () {
    const [name, setName] = useLocalStorage('name', '');
    useUpdateLogger(name);

    return (
        <>
            <input value={name} onChange={ event => setName(event.target.value)} type="text"/>
            <div>{name}</div>
        </>
    );
}
