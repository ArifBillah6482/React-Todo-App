import TodoProject from "./Todo Project/Home";
import "./App.css";

// import Todo from "./Components/todo";
function App() {
  return (
    <div>
      {/* <Todo /> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {" "}
        <TodoProject />
      </div>
    </div>
  );
}

export default App;
