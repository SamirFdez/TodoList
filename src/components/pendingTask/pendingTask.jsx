import { ListGroup } from "react-bootstrap";

export const PendingTask = ({ todoList }) => {
  return (
    <>
      <div className="shadow mt-3 rounded" style={{ padding: "1em" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5> List of all my pending tasks </h5>
          </ListGroup.Item>

          {todoList.filter((task) => !task.isComplete).length ? (
            <>
              {todoList
                .filter((task) => !task.isComplete)
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
                  </ListGroup.Item>
                ))}
              <ListGroup.Item className="fw-light font-monospace">
                Total pending tasks:
                {todoList.filter((task) => !task.isComplete).length}
              </ListGroup.Item>
            </>
          ) : (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start align-middle"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Congratulations! you don't have pending tasks
                </div>
              </div>
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    </>
  );
};
