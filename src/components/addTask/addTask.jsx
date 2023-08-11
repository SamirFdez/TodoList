import React, { useState } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

import './addTaskStyle.css'

export const AddTask = () => {

    const [titleTask, setTitleTask] = useState ("")
    const [descriptiionTask, setDescriptionTask] = useState ("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const noRechargePage = (e) => {
        e.preventDefault();
    }


    const handleTitleTask = (e) => {
        setTitleTask(e.target.value);
        taskComplete();
    }

    const handleDescriptionTask= (e) => {
        setDescriptionTask(e.target.value);
        taskComplete();
    }

    const taskComplete = () => {
        if (titleTask && descriptiionTask) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
      };

    const clearTask = () => {
        setTitleTask("");
        setDescriptionTask("");
    }

  return (
    <>
        <Form onSubmit={noRechargePage} className="shadow" style={{padding: "1em"}}>
            <FloatingLabel
            controlId="floatingInput"
            label="Task title"
            className="mb-3">
            <Form.Control 
                type="text"
                value={titleTask}
                onChange={handleTitleTask}
                placeholder="Task title" />
            </FloatingLabel>
            
            <FloatingLabel 
                controlId="floatingTextarea" 
                label="Task Description">
            <Form.Control
            as="textarea"
            value={descriptiionTask}
            onChange={handleDescriptionTask}
            placeholder="Task Description"
            className="mb-3"
            style={{ height: '100px' }}/>
            </FloatingLabel>

            <Button 
                variant="primary" 
                type="submit"
                disabled={isButtonDisabled}
                onClick={clearTask}>
                Add task
            </Button>
        </Form>
    </>
  )
}
