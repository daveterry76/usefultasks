import React from 'react'
import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { AuthContext } from '../../contexts/AuthContext'

const TasksGreeting = () => {

    const { name } = useContext(AuthContext);
    const { tasks } = useContext(TasksContext);

  return (
    <>
        {tasks.length > 0
        ? <h2 className='text-base lg:text-lg'>Hello <strong>{name}</strong>! Here are your <span className='underline italic text-green-600'>useful</span> tasks. 😉</h2>
        : <h2 className='text-base lg:text-lg'>Hello <strong>{name}</strong>! There are no tasks for now. 🥱 Add a new task.</h2>
      }
    </>
  )
}

export default TasksGreeting