import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

export const CompletedTask = ({ todoList }) => {
  return (
    <>
      <div className="shadow mt-3 rounded" style={{ padding: "1em" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5> List of all my completed tasks </h5>
          </ListGroup.Item>

          {todoList.filter((task) => task.isComplete).length ? (
            <>
              {todoList
                .filter((task) => task.isComplete)
                .map((task, index) => (
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start align-middle"
                    key={index}
                  >
                    <span className="mx-2 my-3">{index + 1}. </span>
                    <div className="ms-2 me-auto">
                      <div
                        className={`fw-bold ${
                          task.isComplete ? "text-decoration-line-through" : ""
                        }`}
                      >
                        {task.title}
                      </div>
                      <div
                        className={`text-muted ${
                          task.isComplete ? "text-decoration-line-through" : ""
                        }`}
                      >
                        {task.description}
                      </div>
                    </div>
                    <Badge
                      className="my-3"
                      style={{ marginRight: "0em", padding: "0.5em" }}
                      bg="success"
                      pill
                    >
                      completed
                    </Badge>
                  </ListGroup.Item>
                ))}
              <ListGroup.Item className="fw-light font-monospace">
                Total completed tasks:
                {todoList.filter((task) => task.isComplete).length}
              </ListGroup.Item>
            </>
          ) : (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start align-middle"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">You don't have completed tasks</div>
              </div>
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    </>
  );
};
