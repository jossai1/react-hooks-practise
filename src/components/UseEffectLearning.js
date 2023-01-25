import '../styles/App.css';
import {useEffect, useState} from "react";

function UseEffectLearning() {
     const [resourceType, setResourceType] = useState('posts');
     const [items, setItems] = useState([]);

     useEffect(() => {
         console.log('changed');
         // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
         //     .then(response => response.json())
         //     .then(json => setItems(json))
         //return code runs first to clean up whatever we did the last time - this is a cleanup function
         return () => console.log('returned')
     }, [resourceType]);

     return (
         <>
             <button onClick={() => setResourceType('posts')}>Posts</button>
             <button onClick={() => setResourceType('users')}>Users</button>
             <button onClick={() => setResourceType('comments')}>Comments</button>
             <h1>{resourceType}</h1>
             {
                 items.map((item) => <pre>{JSON.stringify(item)}</pre>)
             }
         </>
     )


/*    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        //when app is unmounted, the return function is called
        //clean up function - removes event listener when app is unmounted which speeds up our app as there aren't listeners being added and clogging up our app
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);


    return (
        <div>
            {windowWidth}
        </div>
    );*/
}

export default UseEffectLearning;
