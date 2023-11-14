import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todo.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    getItems()
  }, []);
  const getItems = () => {
    const accessToken = localStorage.getItem('accessToken');
    axios.get('http://localhost:8001/read-todo', {
      headers: { authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        console.log(response)
        let total_data = response.data
        if ( total_data.length > 0) {
          const newTasks = total_data.map((element) => ({
            id: element._id, // or use another unique identifier from your database
            text: element.text,
          }));
          setTasks(newTasks);
        }
        else{
          setTasks([])
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const addTask = async () => {
    
    if (newTask.trim() !== '') {
      // setTasks([...tasks, { id: Date.now(), text: newTask }]);
      await axios.post('http://localhost:8001/create-todo', { text: newTask }, {
        headers: { authorization: `Bearer ${accessToken}` },
      }).then((response) => {
        // console.log(response)
        if(response.status === 200)
        {
          getItems()
        }
      }).catch((err) => {
        console.error(err)
      })
      setNewTask('');
    }
  };

  const removeTask = async(taskId) => {
    console.log(taskId)
    await axios.post('http://localhost:8001/delete-todo', {id: taskId}, {
      headers: { authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      if(response.status === 204) getItems()
      console.log(response)

    }).catch((err) => {
      console.error(err)
    })
    
    // const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button className="remove-btn" onClick={() => removeTask(task.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Todo;
