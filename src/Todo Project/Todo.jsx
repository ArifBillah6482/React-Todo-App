import "./Style.css";
const Todo = ({ todo, DltTodo }) => {
  const dltTodo = (id2) => DltTodo(id2);
  return (
    <div>
      <div className="TodoDiv" style={{ width: "380px" }}>
        <h3 className="todoTitle">
          <span className="redText">Title: </span> {todo.title}
        </h3>
        <h5 className="todoDesc">
          <span className="redText">Description: </span>
          {todo.desc}
        </h5>{" "}
        <br />
        <button
          className="BtnRed"
          style={{ padding: "5px 8px" }}
          onClick={() => dltTodo(todo.id2)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Todo;
