import React from 'react'
import { useState } from 'react'
import Logo from '../components/Logo'
import TasksGreeting from '../components/Tasks/TasksGreeting'
import { Button } from 'react-bootstrap'
import MyVerticallyCenteredModal from '../components/Tasks/AddNewTaskModal'
import TasksList from '../components/Tasks/TasksList'


const Tasks = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Logo />
      <div className='flex flex-col lg:flex-row justify-between gap-14'>
        <TasksGreeting />
        <div className='ml-7 lg:ml-0'>
          <Button size='sm' variant="success" onClick={() => setShowModal(true)}>
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