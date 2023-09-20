import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { User } from '../user/user';
import { TaskManagement } from '../taskManagement/taskManagement';
import { PendingTask } from '../pendingTask/pendingTask';
import { CompletedTask } from '../completedTask/completedTask';

export const TabsMenu = () => {

  const [todoList, setTodoList] = useState([])
  const [username, setUsername] = useState()

  const user = `${username?.charAt(0).toUpperCase() + username?.slice(1)}'s Todo List`

  useEffect(() => {
    const data = localStorage.getItem('tasks')
    if (data !== null) setTodoList(JSON.parse(data))

  }, [])

  useEffect(() => {

    const intervalId = setInterval(() => {
      const getUsername = localStorage.getItem('username');

      if (getUsername !== null) {
        setUsername(getUsername);
      } else {
        setUsername("Todo List")
      }
    }, 1);

    return () => {
      clearInterval(intervalId); 
    };
  }, [])

  return (
    <>
      <User/>
      <Container>
        <Row className="mt-4 mb-4">
          <Col>
            <h1> {username !== "Todo List" ? user : username} </h1>
            {/* {
              username !== null ? 
                <h1> { `${username?.charAt(0).toUpperCase() + username?.slice(1)}'s Todo List` } </h1>
                : <h1> Todo List </h1>
            } */}
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
