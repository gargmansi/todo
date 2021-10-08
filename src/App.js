import React, { useState } from 'react';
import Todolist  from './todolist';
const App = () =>{
  const [inputList, setInputList] = useState(" ");
  const [Items, setItems ] = useState([]);
  const itemEvent = (Event) =>
  {
    setInputList(Event.target.value);
  };
  const listOFItems  = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    
    });
    setInputList(" ");
  };
  return  (
<>
<div className = "main_div">
  <div className = "center_div">
    <br/>
    <h1>ToDo list</h1>   <input type = "text" placeholder="Add a items"
    value={inputList}
    onChange={itemEvent} / >
    <button onClick={listOFItems}> + </button>
    <ol> 
 { /*<li> {inputList} </li> */ }
 {Items.map((itemval) =>{
  return <li> {itemval} </li>;
 }
  )}
    </ol>
  </div>

</div>



</>
)
};
export default App;
 