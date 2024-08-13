// eslint-disable-next-line no-unused-vars
import React from 'react';
import TaskForm from './components/TaskForm';
import './App.css';
import TaskColumn from './components/TaskColumn';

const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className='app_main'>
        < TaskColumn columnLabel="To Do"/>
        < TaskColumn columnLabel="Doing"/>
        < TaskColumn columnLabel="Done"/>
      </main>
    </div>
  )
}

export default App
