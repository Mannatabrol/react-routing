import React, { useState, useEffect } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
        setLoading(false);
      });
  }, []);

  // Function to handle checkbox change
  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'pink' }}>
      <h1 style={{ color: 'red' }}>ToDo Page</h1>
      <h2>Choose the Tasks to Do</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo, index) => (
            <li key={todo.id} style={{ textAlign: 'left' }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <label>{todo.title}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
