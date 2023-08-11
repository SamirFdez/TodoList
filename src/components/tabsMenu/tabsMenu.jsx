import React from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap';

import { AddTask } from '../addTask/addTask';

export const TabsMenu = () => {
  return (
    <>
      <Container className="mt-5" >
        <h1 className="mb-5" style={{textAlign: "center"}}>#todo</h1>
            <Tabs
                defaultActiveKey="All"
                id="justify-tab-example"
                justify>

            <Tab eventKey="All" title="All">
                <AddTask/>
            </Tab>

            <Tab eventKey="Active" title="Active">
                
            </Tab>

            <Tab eventKey="Completed" title="Completed">
                
            </Tab>

          </Tabs>
        </Container>
    </>
  )
}
