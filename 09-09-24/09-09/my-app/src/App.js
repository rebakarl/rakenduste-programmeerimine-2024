import React, {useState} from "react"
import './App.css';
import Name from './components/Name';
import Counter from './components/Counter';
import PropDrilling from './components/PropDrilling';
import Show from "./components/Show";

function App() {
  const [show, setShow]=useState(true)
  return (
  <>
    <Name title="Karl"/>
    <Name/>
    <Counter />
    <PropDrilling/>
    <Show
    show={show}
    toggleShow=
    />
  </>
  );
};

export default App;
