import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const hendaleAdd=()=>{
        const newCount=count+1;
        setCount(newCount)
    }


    const handaleReduce=()=>{
        const newCount=count-1;
        setCount(newCount)
    }


    return (
        <div style={{border:'2px solid red',padding:'10px 5px',borderRadius:'8px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={hendaleAdd}>Add</button>
            <button onClick={handaleReduce}>Reduce</button>
        </div>
    )

};

