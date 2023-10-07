import React, { useState, useEffect } from "react";
import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import { TaskManagement } from "../taskManagement/taskManagement";
import { PendingTask } from "../pendingTask/pendingTask";
import { CompletedTask } from "../completedTask/completedTask";

export const TabsMenu = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data !== null) setTodoList(JSON.parse(data));
  }, []);

  return (
    <>
      <Container>
        <h1 className="mt-5 mb-4" style={{ textAlign: "center" }}>
          Todo List
        </h1>

        <Tabs defaultActiveKey="Management" justify>
          {/* TASK MANAGEMENT */}
          <Tab eventKey="Management" title="Management">
            <TaskManagement todoList={todoList} setTodoList={setTodoList} />
          </Tab>

          {/* PENDING TASKS */}
          <Tab eventKey="Pending" title="Pending">
            <PendingTask todoList={todoList} />
          </Tab>

          {/* COMPLETED TASKS */}
          <Tab eventKey="Completed" title="Completed">
            <CompletedTask todoList={todoList} />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};
