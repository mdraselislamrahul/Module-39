import { useState } from "react"

export default function Team() {
    const [team, count] = useState(11)

    const handleAdd = () => {
        const newCount = team + 1;
        count(newCount)
    }
    const handleRemove=()=>{
        const remove=team-1;
        count(remove)
    }


    const teamStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: "10px",
        borderRadius: '8px'
    }
    return (
        <div style={teamStyle}>
            <h3>Team Mamber: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}