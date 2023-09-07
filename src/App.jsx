import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  function handaleClick() {
    alert("Button clicked")
  }

  const handaleClic2 = () => {
    alert("button 2 clivked")
  }
  const handaleClic3 = (num) => {
    alert(num + 5)
  }

  return (
    <>

      <h1>React Core Consepts</h1>


      <Users></Users>
      <Counter></Counter>
      <Team></Team>

      
      <button onClick={handaleClick}>Click Me</button> <br />
      <button onClick={handaleClic2}>Click Me again</button>


      <button onClick={() => handaleClic3(3)}>Click Me again</button>
    </>
  )
}

export default App
