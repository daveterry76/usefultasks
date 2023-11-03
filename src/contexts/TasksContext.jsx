import React, { useState } from 'react'
import { createContext } from 'react'
import { tasksList } from '../constants/tasksList';

export const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {


    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(tasksList);


  return (
    <TasksContext.Provider value={{
        task,
        setTask,
        tasks,
        setTasks
    }}>
        {children}
    </TasksContext.Provider>
  )
}

export default TasksContextProvider