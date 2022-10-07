import { useState } from "react";
import NewTodo from "./newTodo";
import Todos from "./Todos";
/////////////////////////
/////////////////////////
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  remove,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDjf6aeEPBCUW3n16ZewLpdM0uaSyFubXM",
  authDomain: "react-todo-app-4a68f.firebaseapp.com",
  databaseURL: "https://react-todo-app-4a68f-default-rtdb.firebaseio.com",
  projectId: "react-todo-app-4a68f",
  storageBucket: "react-todo-app-4a68f.appspot.com",
  messagingSenderId: "595122492482",
  appId: "1:595122492482:web:0566a4fb4d98d15ed209db",
  measurementId: "G-8YQYFYDLYW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
let fake;
fake = analytics;
setTimeout(() => {
  console.log(fake); 
}, 10000000);
/////////////////////////
///////////////////////

const TodoHome = () => {
  const [todos, setTodos] = useState([]);

  const handleTodo = (id, id2, title, desc) => {
    set(ref(db, "Todos/" + id2), {
      Time: new Date().toLocaleString(),
      id: id,
      id2: id2,
      title: title,
      desc: desc,
    })
      .then(() => {
        console.log("Success.");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /////////////////////////
  const dltTodo = (id2) => {
    remove(ref(db, "Todos/" + id2))
      .then(() => {})
      .catch((err) => console.log(err));
    // setTodos((oldTodos) => {
    //   const rmvTodo = oldTodos.filter((todo) => {
    //     return todo.id !== id;
    //   });
    //   return rmvTodo;
    // });
  };
  /////////////////////////
  /////////////////////////
  fetch("https://react-todo-app-4a68f-default-rtdb.firebaseio.com/Todos.json")
    .then((response) => response.json())
    .then((json) => {
      const Todos = [];
      for (let key in json) {
        Todos.unshift({ ...json[key] });
      }
      setTimeout(() => {
        setTodos(Todos);
      }, 50);
    });
  return (
    <div className="TodoHomeDiv">
      <NewTodo onAddTodo={handleTodo} />
      <Todos todos={todos} DltTodo={dltTodo} />
    </div>
  );
};
export default TodoHome;
