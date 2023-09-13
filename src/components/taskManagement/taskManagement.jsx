import React, { useState, useEffect } from 'react'
import { Form, Button, FloatingLabel, ListGroup, Badge } from 'react-bootstrap';
import { FaPen, FaTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';

export const TaskManagement = () => {

    const [todoList, setTodoList] = useState([])
    const [formData, setFormData] = useState({ title: '', description: ''})
    const [editData, setEditData] = useState(null)
  
    useEffect(() => {
        const data = localStorage.getItem('tasks')
        if (data !== null) setTodoList(JSON.parse(data))
      }, [])
    
  
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
            if (formData.title !== "" && formData.description !== "") {
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

    const completeTasks = todoList.filter(taskComplete => taskComplete.isComplete === true).length
    const pendingTasks = todoList.length - completeTasks

  return (
    <>
        <Form onSubmit={addTask} autoComplete="off" className="shadow rounded" style={{padding: "1em"}}>
            <FloatingLabel
                controlId="floatingInput"
                label="Task title"
                className="mb-3">
                <Form.Control 
                    type="text"
                    name="title"  
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Task title" />
            </FloatingLabel>
                
            <FloatingLabel 
                controlId="floatingTextarea" 
                label="Task Description">
                <Form.Control
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Task Description"
                    className="mb-3"
                    style={{ height: '100px' }}/>
             </FloatingLabel>

            <Button 
                variant="primary" 
                type="submit">
                Add task
             </Button>
        </Form>

        <div className="shadow mt-5 rounded" style={{padding: "1em"}}>
            <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center justify-content-between"> 
                    <h5> List of all my tasks </h5>
                    {
                        todoList.filter(task => task.isComplete).length > 0 ?
                            (
                                <Button 
                                    className="my-2" 
                                    variant="primary" 
                                    size="sm"
                                    onClick={deleteCompletedTasks}>
                                    Delete completed tasks
                                </Button>
                            ) : null
                    }
                </ListGroup.Item>
            </ListGroup>

            <ListGroup>

                {todoList.map(task => 
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start align-middle"
                    key={task.id}>

                    <input className="form-check-input mx-2 my-3" type="checkbox" checked={task.isComplete} onChange={() => checkTask(task.id)}/>

                    <div className="ms-2 me-auto">
                        <div className={`fw-bold ${task.isComplete ? 'text-decoration-line-through' : ''}`}> {task.title} </div>
                        <div className={`text-muted ${task.isComplete ? 'text-decoration-line-through' : ''}`}> {task.description} </div> 
                    </div>
                    {
                        task.isComplete ? 
                            (
                                <Badge className="my-3" style={{marginRight: "1em"}} bg="success" pill>
                                    completed
                                </Badge>
                            ) : null
                    }
                    
                    <Button 
                        className="my-2" 
                        variant="warning" 
                        size="sm" 
                        style={{marginRight: "0.5em"}}
                        onClick={() => editTask(task.id)}>
                        <FaPen/>
                    </Button>
                    
                    <Button 
                        className="my-2" 
                        variant="danger" 
                        size="sm"
                        onClick={() => deleteTask(task.id)}>
                        <FaTrashCan/>
                    </Button>
                </ListGroup.Item>
                )}
                
                {
                    todoList.length > 0 ?
                        (   
                            <ListGroup.Item className="fw-light font-monospace"> 
                                total tasks: <span>{todoList.length} - </span>
                                pending tasks: <span style={{color: "#dc3545"}}>{pendingTasks}</span> - 
                                completed tasks: <span style={{color: "#0d6efd"}}>{completeTasks}</span>.
                           
                            </ListGroup.Item> 
                        ) : null
                }
            </ListGroup>
        </div>
    </>
  )
}
