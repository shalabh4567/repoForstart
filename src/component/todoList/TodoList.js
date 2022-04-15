import React, { useState } from "react";

const TodoList = () => {
  const [arr, setArr] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    //console.log(todo);
    setArr([...arr, todo]);
    setTodo("");
    //console.log(arr);
  };

  const cutThrough = (e, index) => {
    //Just a strike through in the list
    if (e.detail === 1) {
      e.target.style.textDecoration = "line-through";
    } else {
      e.target.style.textDecoration = "none";
    }

    //**** Remove that element in the array
    // var array = [...arr];

    // if (index != -1) {
    //   array.splice(index, 1);
    // }
    // setArr(array);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </form>
      <ol>
        {arr.map((obj, index) => {
          return (
            <li
              key={index}
              onClick={(e) => cutThrough(e, index)}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              {obj}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
