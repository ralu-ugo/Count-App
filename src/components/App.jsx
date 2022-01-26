import React, { useState } from "react"

const App = () => {
    let [count, setCount] = useState(0);
    
    const increase = () => {
        setCount(count++)
    }

    const decrease = () => {
        setCount(count--)
    }

    return (
        <div className = 'container'>
        <h1>{count}</h1>
     <button onClick = {increase}>+</button>
     <button onClick = {decrease}>-</button>
    </div>

    )
    
    
}

export default App



