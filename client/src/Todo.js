import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here we are saying do not refresh the page when until event is over
    if (newTodo.trim() === '') return;
    //If the field is empty then just return, end the function.
    setTodos([...todos, { text: newTodo }]);
    //here we are doing a couple of things. First, we are setting  'setTodos' to whatever was entered in todos and making
    //text be an object and setting 'newTodo' as a property to the object of 'text'to that
    setNewTodo('');
    // Here we assign setNewTodo to nothing as information will be entered in at the bottom (line 38)
  };
  
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  //This one here is interesing because and underscore means it's nothing, 
  //  single underscore is a convention used by some javascript programmers to 
  // indicate to other programmers that they should "ignore this binding/parameter"
  // So handleDete is saying that we are passing in an argument of index 
  // and assigning it to setTodos. What's getting assigned to setTodos? 
  // we are assigning the variable of todos and removing items that don't match the index
  // So we are removing everything because no items match, therefore deleted

  return (
    <div className="ToDo">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}

        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            {/* note how we have passed in a map with a key. This is a good idea as to keep track in what order things are displayed 
            and compiled */}
            {/* Also, note how 'text' is now appearing a again as an object, and we are displaying the value of text from 'NewTodo (line12) */}
            <button onClick={() => handleDelete(index)}>Delete</button>
            {/* so now the handleDelete function is taking in the argument of index */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;