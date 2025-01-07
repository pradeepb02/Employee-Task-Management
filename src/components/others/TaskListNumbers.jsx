import React, { useContext } from 'react'
import { LoggedInUserContext } from '../../context/LoggedInUserProvider';

const TaskListNumbers = () => {
  const {loggedInUser,setLoggedInUser}=useContext(LoggedInUserContext); 
  return (
    <div className='flex justify-between gap-5 mt-10 screen overflow-auto'>
        <div className='rounded-xl w-[45%] min-w-[180px] py-6 px-9 bg-blue-400 text-start'>
            <h2 className='text-3xl font-bold'>{loggedInUser.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Active Task</h3>        
        </div>
        <div className='bg-red-400 py-6 px-8 rounded-xl w-[45%] min-w-[180px] text-start'>
            <h2 className='text-3xl font-bold'>{loggedInUser.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Failed</h3>        
        </div>
        <div className='bg-yellow-400 py-6 px-8 rounded-xl w-[45%] min-w-[180px] text-start'>
            <h2 className='text-3xl font-bold'>{loggedInUser.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>        
        </div>
        <div className='bg-green-400 py-6 px-8 rounded-xl w-[45%] min-w-[180px] text-start'>
            <h2 className='text-3xl font-bold'>{loggedInUser.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Completed</h3>        
        </div>
    </div>
  )
}

export default TaskListNumbers