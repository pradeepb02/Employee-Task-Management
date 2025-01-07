import React, { useContext } from 'react'
import ActiveTask from './ActiveTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { LoggedInUserContext } from '../../context/LoggedInUserProvider'

const TaskList = () => {
    const {loggedInUser,setLoggedInUser}=useContext(LoggedInUserContext); 
    const id=loggedInUser.id;
  return (
    <div id='tasklist' className='h-[40%]  overflow-y-auto w-full mt-10 flex justify-start items-start gap-5 py-4'>
       {loggedInUser.tasks.map((elem,idx) => {
                if (elem.active) {
                    return <ActiveTask key={idx} data={elem} id={id} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} id={id}/>
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} id={id} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} id={id} />
                }

            })}
    </div>
  )
}

export default TaskList