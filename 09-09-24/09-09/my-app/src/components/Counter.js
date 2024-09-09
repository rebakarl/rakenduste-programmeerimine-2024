import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const modifyCounter = () => setCounter(counter + 1)

  return (
    <>
      <h1>Counter</h1>
      {[+1,+5,+50,-1,-5,-50].map(element)=(<button onClick={modifyCounter}>sync{element}</button>)}
      <button onClick={() => setCounter(counter + 1)}> +1 </button>
      <button onClick={() => setTimeout(() => modifyCounter(), 200)}>
        async +1
      </button>
    </>
  )
}

export default Counter
