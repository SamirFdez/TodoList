import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { TaskManagement } from '../taskManagement/taskManagement';
import { PendingTask } from '../pendingTask/pendingTask';
import { CompletedTask } from '../completedTask/completedTask';
import Swal from 'sweetalert2';

export const TabsMenu = () => {

  const [todoList, setTodoList] = useState([])
  const [user, setUser] = useState()

  const username = `${user?.charAt(0).toUpperCase() + user?.slice(1)}'s` + "Todo List"

  useEffect(() => {
    const data = localStorage.getItem('tasks')
    if (data !== null) setTodoList(JSON.parse(data))

    const username = localStorage.getItem('usermame');

    if(username === null){
      Swal.fire({
        icon: 'question',
        title: "What's your name?",
        input: 'text',
        inputLabel: "This information is for better usability",
        inputPlaceholder: 'Enter your first name',
        showCancelButton: true        
      }).then((result) => {
        if (result.value) {
          localStorage.setItem('username', result.value);
          setUser(value)
        }
      });

    } else {
      setUser(username)

    }

  }, [])

  return (
    <>
      <Container>
        <Row className="mt-4 mb-4">
          <Col>
            <h1>
              {
                username === "NaN'sTodo List" ? "Todo List"
                : username
              }
              {/* {`${user?.charAt(0).toUpperCase() + user?.slice(1)}'s Todo List`} */}
            </h1>
          </Col>
          <Col></Col>
        </Row>
            <Tabs
                defaultActiveKey="Management"
                justify>

          {/* TASK MANAGEMENT */}
            <Tab eventKey="Management" title="Management">
              <TaskManagement todoList={todoList} setTodoList={setTodoList}/>
            </Tab>

          {/* PENDING TASKS */}
            <Tab eventKey="Pending" title="Pending">
                <PendingTask todoList={todoList}/>
            </Tab>

          {/* COMPLETED TASKS */}
            <Tab eventKey="Completed" title="Completed">
                <CompletedTask todoList={todoList}/>
            </Tab>

          </Tabs>
        </Container>
    </>
  )
}
