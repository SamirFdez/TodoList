import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { TaskManagement } from '../taskManagement/taskManagement';
import { PendingTask } from '../pendingTask/pendingTask';
import { CompletedTask } from '../completedTask/completedTask';

export const TabsMenu = () => {

  return (
    <>
      <Container className="mt-5" >
        <h1 className="mb-5" style={{textAlign: "center"}}>Todo List</h1>
            <Tabs
                defaultActiveKey="Management"
                justify>

          {/* TASK MANAGEMENT */}
            <Tab eventKey="Management" title="Management">
              <TaskManagement/>
            </Tab>

          {/* PENDING TASKS */}
            <Tab eventKey="Pending" title="Pending">
                <PendingTask/>
            </Tab>

          {/* COMPLETED TASKS */}
            <Tab eventKey="Completed" title="Completed">
                <CompletedTask/>
            </Tab>

          </Tabs>
        </Container>
    </>
  )
}
