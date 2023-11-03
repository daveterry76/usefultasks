import React from 'react'

const TasksGreeting = () => {

    const name = "David";

  return (
    <>
        <h2 className='text-base lg:text-lg'>Hello, <strong>{name}</strong>! Here are your <span className='underline italic text-green-600'>useful</span> tasks. 😉</h2>
    </>
  )
}

export default TasksGreeting