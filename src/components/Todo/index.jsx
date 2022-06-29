import { useMemo, useEffect, useState } from "react";

import Location from "../Location";
import { getNames } from "../../helper";
import LazyImage from "../LazyImage";
import Button from "../Button";

import "./todo.css";

const Todo = ({ todo, onChange, isCompleted }) => {
  const [showModal, setShownModal] = useState(false);
  const [completed, setCompleted] = useState(false);
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  const handleModal = () => {
    setShownModal(!showModal);
  };

  const closeModal = () => {
    setShownModal(false);
  };

  useEffect(() => {
    setCompleted(isCompleted);
    setShownModal(false);
  }, [isCompleted]);

  // useEffect(() => {
  //   if (config.sorted) {
  //     setShownModal(true);
  //   }
  // }, [config.sorted]);

  const userName = useMemo(() => getNames(todo), []);

  return (
    <div className="todo" onClick={handleModal} data-testid="todo-id">
      <div className="todo_image">
        <LazyImage src={todo?.picture?.large} alt={todo?.picture?.large} />
      </div>
      <div className="todo_title">{userName}</div>
      <div className="todo_location">
        <Location location={todo?.location || {}} />
      </div>
      <div className="todo_footer">
        <div className="todo_footer-complete">
          Completed:{" "}
          <input
            type="checkbox"
            checked={completed}
            className="todo_checked"
            data-testid="todo-input"
            onChange={onChange}
          />
        </div>
      </div>
      <div className={showHideClassName}>
        <section className="modal-wrapper">
          <LazyImage src={todo?.picture?.large} alt={todo?.picture?.large} />
          <div className="todo_description">{todo?.description}</div>
          <Button onClick={closeModal}>Close</Button>
        </section>
      </div>
    </div>
  );
};

export default Todo;
