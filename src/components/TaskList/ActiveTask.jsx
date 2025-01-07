import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { LoggedInUserContext } from '../../context/LoggedInUserProvider'

const ActiveTask = ({data,id}) => {
    const [userData, setUserData] = useContext(AuthContext);
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
    
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    
    function onComplete() {
        const updatedEmployees = employees.map((employee) => {
            if (employee.id === id) {
                const updatedTasks = employee.tasks.map((task) =>
                    task.taskTitle === data.taskTitle
                        ? { ...task, completed: true, active: false, newTask: false, failed: false }
                        : task
                );
    
                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...employee.taskCounts,
                        completed: employee.taskCounts.completed + 1,
                        active: employee.taskCounts.active-1
                    },
                };
            }
            return employee;
        });
    
        // Update localStorage and context
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        setUserData(updatedEmployees);
    
        const updatedLoggedInUser = updatedEmployees.find((employee) => employee.id === id);
        if (updatedLoggedInUser) {
            setLoggedInUser(updatedLoggedInUser);
            localStorage.setItem(
                'loggedInUser',
                JSON.stringify({ role: 'employee', data: updatedLoggedInUser })
            );
        }
    }
    function onFailed() {
        const updatedEmployees = employees.map((employee) => {
            if (employee.id === id) {
                const updatedTasks = employee.tasks.map((task) =>
                    task.taskTitle === data.taskTitle
                        ? { ...task, completed: false, active: false, newTask: false, failed: true }
                        : task
                );
    
                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...employee.taskCounts,
                        failed: employee.taskCounts.failed + 1,
                        active: employee.taskCounts.active-1
                    },
                };
            }
            return employee;
        });
    
        // Update localStorage and context
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        setUserData(updatedEmployees);
    
        const updatedLoggedInUser = updatedEmployees.find((employee) => employee.id === id);
        if (updatedLoggedInUser) {
            setLoggedInUser(updatedLoggedInUser);
            localStorage.setItem(
                'loggedInUser',
                JSON.stringify({ role: 'employee', data: updatedLoggedInUser })
            );
        }
    }
    

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button onClick={onComplete} className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button onClick={onFailed}className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default ActiveTask