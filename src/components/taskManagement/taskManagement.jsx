import React, { useState } from 'react'
import Swal from 'sweetalert2';

import { TaskForm } from './taskForm';
import { TaskManagementTable } from './taskManagementTable';

export const TaskManagement = ({todoList, setTodoList}) => {

    const [formData, setFormData] = useState({ title: '', description: ''})
    const [editData, setEditData] = useState(null)
  
  
    const handleChange = ({target}) => {
        setFormData({... formData, [target.name]: target.value})
    }

    // Function to save an edited task or to add a new task
    const addTask = (e) => {
        e.preventDefault();
        if (editData !== null) {
            const updatedTodoList = [...todoList]
            const task = updatedTodoList.find((task) => task.id === editData)

            task.title = formData.title
            task.description = formData.description

            setTodoList(updatedTodoList)
            setEditData(null)

            localStorage.setItem('tasks', JSON.stringify(updatedTodoList));
            setFormData({ title: '', description: '' })

        } else {
            if (formData.title === "" && formData.description === ""){
                Swal.fire({
                    icon: 'warning',
                    text: `Complete all fields to add the task`,
                    timer: 3000
                })
            } else {
                const task = formData
                task.isComplete = false
                task.id = Date.now()
      
                const updatedTodoList = [...todoList, task];
                setTodoList(updatedTodoList);      
                localStorage.setItem('tasks', JSON.stringify(updatedTodoList));
                
                setFormData({ title: '', description: '' });
            }
        }
    }

    // Edit function, sends the data to the inputs
    const editTask = (id) => {
        const updatedTodoList = [...todoList]
        const task = updatedTodoList.find((task) => task.id === id)
        setFormData({title: task.title, description: task.description})
        setEditData(id)
    }

    // Function to delete a task
    const deleteTask = (id) => {
        Swal.fire({
            title: 'Do you want to delete this task?',
            icon: 'warning',
            showCancelButton: ["Cancel", true],
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete'
          }).then((result) => {
            if (result.isConfirmed) {
                const updatedTodoList = todoList.filter(task => task.id !== id)
                setTodoList(updatedTodoList)
                localStorage.setItem('tasks', JSON.stringify(updatedTodoList));
                Swal.fire({
                    icon: 'success',
                    text: `The task has been successfully deleted`,
                    timer: 1500
                  })
            }
        })
    }

    // Function to change the status of a task (from not completed to completed)
    const checkTask = (id) => {
        const updatedTodoList = [...todoList]
        const task = updatedTodoList.find((task) => task.id === id)
        task.isComplete = !task.isComplete
        setTodoList(updatedTodoList)
        localStorage.setItem('tasks', JSON.stringify(updatedTodoList));
      }
    
    //   Function to delete all completed tasks
    const deleteCompletedTasks = () => {
        Swal.fire({
            title: 'Do you want to delete all completed tasks?',
            icon: 'warning',
            showCancelButton: ["Cancel", true],
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete'
          }).then((result) => {
            if (result.isConfirmed) {
                const updatedTodoList = todoList.filter(task => task.isComplete === false)
                setTodoList(updatedTodoList)
                localStorage.setItem('tasks', JSON.stringify(updatedTodoList));
                Swal.fire({
                    icon: 'success',
                    text: `All completed tasks have been successfully deleted`,
                    timer: 1500
                  })
            }
        })
    }

  return (
    <>
        <TaskForm 
            addTask={addTask} 
            formData={formData} 
            handleChange={handleChange}
        />

        {
            todoList.length > 0 ? 
                <TaskManagementTable 
                    todoList={todoList} 
                    deleteCompletedTasks={deleteCompletedTasks} 
                    deleteTask={deleteTask}
                    checkTask={checkTask}
                    editTask={editTask}
                />
            : null
        }
    </>
  )
}

