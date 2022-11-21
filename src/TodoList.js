import React, { useState, useEffect } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  const [todoList, setTodoList] = useState([]);
  const importData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jData = await data.json();
    setTodoList(jData);
  };

  useEffect(() => {
    importData();
  }, []);

  const handleChange = (event) => setActivity(event.target.value);

  function addActivity() {
    setlistData((listData) => {
      const newList = [...listData, activity];
      setActivity("");
      return newList;
    });
  }

  const forStrike = (i) => {
    const newTodo = todoList.map((todo, index) => {
      if (index === i) return { ...todo, isStriked: !todo.isStriked };
      else return todo;
    });
    setTodoList(newTodo);
  };

  const handleDelete = (i) => {
    const newtodo = todoList.filter((todo, index) => {
      return index!==i
    });
    setTodoList(newtodo);
  };

  function removeAll() {
    
    setTodoList([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>TODO LISTS</h1>
        </div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={handleChange}
        />
        <button onClick={addActivity}>Add</button>

        {listData.map((data, i) => {
          return (
            <div key ={i}>
                <h2>{data}</h2>
             </div>
          )   
        })}

        <h2>
            {todoList.map((value, index) => {
              return (
                <div key={index}>
                  <div>
                    <div
                      style={{
                        cursor: "pointer",
                        textDecoration: value.isStriked
                          ? "blue line-through"
                          : "none",
                      }}
                      onClick={() => forStrike(index)}
                    >
                      {value.title}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
            }
        </h2>
        <button onClick={removeAll}>Remove All</button>
      </div>
    </>
  );
}

export default TodoList;
