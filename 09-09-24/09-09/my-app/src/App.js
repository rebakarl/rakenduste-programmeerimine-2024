import React, { useState } from "react"
import "./App.css"
import Name from "./components/Name"
import Counter from "./components/Counter"
import PropDrilling from "./components/PropDrilling"
import Show from "./components/Show"
import Context from "./components/Context"
import MyProfile from "./components/myProfile"

function App() {
  const [show, setShow] = useState(true)
  const toggleShow = () => setShow(prevShow => !prevShow)
  const hobbies=["Lugemine", "Magamine", "Sportimine"];

  return (
    <div className="page-container"> {/* flexbox */}
      <Context />
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
      <Counter />
      <Name title="Karl" />
      <Name />
      <MyProfile name="Karl" hobbies={hobbies}/>
    </div>
  )
}

export default App