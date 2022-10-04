import { useState } from "react";

export default function NewTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const descChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");
    let id = Math.random();
    let id2 = Math.floor(Math.random() * 1020609);
    onAddTodo(id, id2, title, desc);
  };
  return (
    <div style={{ borderBottom: "1px solid blueviolet" }}>
      <form action="" onSubmit={handleSubmit}>
        <h1
          style={{
            fontSize: "40px",
            color: "rgb(91, 4, 173)",
            textAlign: "center",
            marginBottom: "20px",
            textDecoration: "underline",
            fontWeight: "100",
          }}
        >
          Todo App
        </h1>
        <div>
          <label
            htmlFor="title"
            style={{
              fontSize: "20px",
              color: "purple",
              letterSpacing: "1px",
              marginRight: "65px",
            }}
          >
            Title:{" "}
          </label>
          <input
            type="text"
            id="title"
            className="Input todoTitleInput"
            placeholder="Title"
            name="title"
            value={title}
            onChange={titleChange}
          />
        </div>
        {/*  */}
        <div>
          <label
            htmlFor="desc"
            style={{ fontSize: "20px", color: "purple", letterSpacing: "1px" }}
          >
            Description:{" "}
          </label>
          <input
            type="text"
            id="desc"
            className="Input todoDescInput"
            placeholder="Description..."
            name="desc"
            value={desc}
            onChange={descChange}
          />
        </div>
        {/*  */}
        <button
          type="submit"
          className="AnimatedBtnPurple"
          style={{
            margin: "7px 0 30px 10px",
            padding: "7px 24px",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
