import React from 'react'
import { Button, ListGroup, Badge } from 'react-bootstrap';
import { FaPen, FaTrashCan } from "react-icons/fa6";

export const TaskManagementTable = ({todoList, checkTask, editTask, deleteTask, deleteCompletedTasks}) => {

    const completeTasks = todoList.filter(taskComplete => taskComplete.isComplete === true).length
    const pendingTasks = todoList.length - completeTasks

  return (
    <>
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
        
            {todoList.map(task => 
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start align-middle"
                    key={task.id}>
        
                    <input className="form-check-input mx-2 my-3" type="checkbox" checked={task.isComplete} onChange={() => checkTask(task.id)}/>
        
                    <div className="ms-2 mx-auto">
                        <div className={`fw-bold ${task.isComplete ? 'text-decoration-line-through' : ''}`}> {task.title} </div>
                        <div className={`text-muted ${task.isComplete ? 'text-decoration-line-through' : ''}`}> {task.description} </div> 
                    </div>
                    <div>
                        <div>
                            {
                                task.isComplete ? 
                                    (
                                        <Badge style={{padding: "0.5em"}} bg="success" pill>
                                            completed
                                        </Badge>
                                    ) : null
                            }
                        </div>
        
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
                    </div>

                </ListGroup.Item>
            )}
            {todoList.length > 0 ?
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
