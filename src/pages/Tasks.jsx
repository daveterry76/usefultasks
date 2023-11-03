import React from 'react'
import { useState } from 'react'
import Logo from '../components/Logo'
import TasksGreeting from '../components/Tasks/TasksGreeting'
import { Button } from 'react-bootstrap'
import MyVerticallyCenteredModal from '../components/Tasks/AddNewTaskModal'
import TasksList from '../components/Tasks/TasksList'
import { useContext } from 'react'
import { TasksContext } from '../contexts/TasksContext'
import { useEffect } from 'react'


const Tasks = () => {

  const [showModal, setShowModal] = useState(false);
  const { setTask, tasks } = useContext(TasksContext);

  const handleOpenNewTask = () => {
    setTask('');
    setShowModal(true);
  }


  useEffect(() => {
    document.title = 'Tasks'
  })


  return (
    <>
      <Logo />
      <div className='flex flex-col lg:flex-row justify-between gap-14 mx-9'>
        <TasksGreeting />
        <div className='lg:ml-0'>
          <Button size='sm' variant="success" onClick={handleOpenNewTask}>
            + Add New Tasks
          </Button>

          <MyVerticallyCenteredModal
            show={showModal}
            onHide={() => setShowModal(false)}
          />
        </div>
      </div>
      <div>
        <TasksList />
      </div>
    </>
  )
}

export default Tasks