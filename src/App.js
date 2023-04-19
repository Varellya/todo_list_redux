import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemAction, completeItemAction, delItemAction } from "./store/toDoReducer";

export default function App() {
  const [note, setNote] = useState();

  const dispatch = useDispatch();
  const toDoList = useSelector(state => state.toDoList);

  const addNewItem = (note) => {
    const item = {
      note,
      id: Date.now()
    };
    
    dispatch(addItemAction(item));
    setNote('');
  };

  const deleteItem = (item) => {
    dispatch(delItemAction(item.id));
  };

  const completeItem = (item) => {
    dispatch(completeItemAction(item.id));
  };

  return (
    <div className="App">
      <h1 className="toDoTitle">ToDo List</h1>

      <ul className="toDoList">
        {toDoList.map(item => (
          <li key={item.id} className={`toDoItem  ${item.completed ? 'completed' : ''}`}>
            <input type="checkbox" name="state" onClick={() => completeItem(item)} />
            <p>{item.note}</p>
            <button onClick={() => deleteItem(item)} >
              <img src="../../img/delete.png" alt="" />
            </button>
          </li>
        ))}
      </ul>

      <form className="appForm" action="" method="get">
        <input type="text" id="get_note" value={note} onChange={(e) => setNote(e.target.value)} />
        <button type="button" onClick={() => addNewItem(note)} >
          <img src="../../img/add.png" alt="" />
        </button>
      </form>
    </div>
  );
};
