import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <Todo todo={todo} key={todo.id} DltTodo={props.DltTodo} />
      ))}
    </div>
  );
};
export default Todos;
