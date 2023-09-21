import React from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap';

export const TaskForm = ({addTask, formData, handleChange}) => {
  
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
    </>
  )
}
