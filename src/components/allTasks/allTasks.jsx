import React from 'react'
import { ListGroup, Badge, Button } from 'react-bootstrap'
import { FaPen, FaTrashCan } from "react-icons/fa6";

export const AllTasks = () => {

    const todoListArray = [
        {
            title: "Title1",
            description: "Description",
            isComplete: false,
            id: 1
        },
        {
            title: "Title2",
            description: "Description 2",
            isComplete: true,
            id: 2
        }
    ]

    const completeTasks = todoListArray.filter(taskComplete => taskComplete.isComplete === true).length
    const pendingTasks = todoListArray.length - completeTasks

  return (
    <>
        <div className="shadow mt-5 rounded" style={{padding: "1em"}}>

        <ListGroup variant="flush">
            <ListGroup.Item>
                <h5>List of all my tasks</h5>
            </ListGroup.Item>
        </ListGroup>

        <ListGroup>

            {todoListArray.map((task,index) => 
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start align-middle"
                key={index}>

                <input className="form-check-input mx-2 my-3" type="checkbox"  id="defaultCheck1"/>

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
                    style={{marginRight: "0.5em"}}>
                    <FaPen/>
                </Button>
                
                <Button 
                    className="my-2" 
                    variant="danger" 
                    size="sm">
                    <FaTrashCan/>
                </Button>
            </ListGroup.Item>
            )}
            <ListGroup.Item className="fw-light font-monospace"> 
                total tasks: <span>{todoListArray.length} - </span>
                pending tasks: <span style={{color: "#dc3545"}}>{pendingTasks}</span> - 
                completed tasks: <span style={{color: "#0d6efd"}}>{completeTasks}</span>.
            </ListGroup.Item>
        </ListGroup>

        </div>
    
    </>
  )
}
