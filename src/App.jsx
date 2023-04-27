import { useState, useEffect } from "react";
import "./App.css";
import Title from "./Components/Title";
import FormElement from "./Components/FormElement";

function App() {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState();
  const[view, setView]= useState(false);

  function toggleHandler() {
    setToggle((prev) => !prev);
  }

  function clickHandler(){
    setActive(false);
    setView(true);
  }

  return (
    <>
      <div className="btn">
        <button onClick={() => setActive(true)}>Task 4.1</button>
        <button onClick={clickHandler}>Task 4.2</button>
      </div>

      {active ? (
        <div className="togglediv">
          {toggle && <Title />}
          <button className="toggle" onClick={toggleHandler}>
            Toggle
          </button>
        </div>
      ) : (
        <div className="formElement">
         {view&& <FormElement />}
        </div>
      )}
    </>
  );
}

export default App;
