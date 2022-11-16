import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  const handleChange = (event) => setActivity(event.target.value);

  function addActivity() {
    setlistData((listData) => {
      const newList = [...listData, activity];
      setActivity("");
      return newList;
    });
  };

  const crossLine = event => {
      return (event.target.style.setProperty('text-decoration', 'line-through')
      )
    }

  function removeAll() {
    setlistData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header"><h1>TODO LISTS</h1></div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={handleChange}
        />
        <button onClick={addActivity}>Add</button>

        {/* <h2>All the lists:</h2> */}
        {listData.map((data, index) => {
          return (
            
              <h2 onClick={crossLine} key ={index}>{data}</h2> 
           
          );
        })}
        <button onClick={removeAll}>Remove All</button>
      </div>
    </>
  );
}

export default TodoList;
