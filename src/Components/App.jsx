import React, {useEffect } from 'react'
import Greeter from './Greeter';
import { useState } from 'react'; //

const App = (props) => {

    const [username, setUsername] = useState(''); // controlled react input
    const [loaded, setLoaded] = useState('false'); // useState for conditional render
    

    useEffect(() => {
        if (loaded) {
            setTimeout(() => setLoaded(!loaded), 3000);
        }
    }, [loaded]);


    // conditional render #8
    if (loaded) {
        return (
            <div>
                <h1>Website loading...</h1>
                <button type="button" onClick={() => setLoaded(!loaded)}>Click me to load page</button>
            </div>
        )
    }



    return ( //#4,6,7
        <>
            <Greeter name="Joseph" phrase="How is your day going?" />
            <Greeter name="Allan" phrase="This week is going to be a good one" />
            <Greeter name="Josh" phrase="Try to do something different this week" />
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <p>You are logging in as: {username}</p>
            <button type="button" onClick={() => setLoaded(!loaded)}>Click to toggle the state of Loaded</button>
        </>
    )
}





export default App;
// three parts: import React from 'react', the actual component and export default App name
//line 17 is a controlled react input, with the atttributes of value and on change to the input
//line 7 is a useStake hook with a state variable of username initializing a blank string ('')
//line 8  is another use state hook with the variable name of loaded set to false
//lines 19-26: adding an if statement if the page hasnt loaded display whats inside of the return
// lines 11-15 is a useeffect for setting a timer on duration of page loading 3000 seconds, only runs on changes to the loaded state, hook set up a 3 second timer and will toggle the loaded state if the button hasnt been clicked yet 
//line 37 add a button with an onclick prop that will toggle state of loaded from false to true. 
// line 23 is a button with an onclick that toggles the state loaded from false to true #8 instruction