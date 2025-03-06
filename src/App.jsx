import { useState } from "react";
import inputInfo from "../src/Info.json";

function Input_control() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [list, setList] = useState(inputInfo);

  const handleSubmit = (event) => {
    event.preventDefault();
    setList((prevpost) => [
      ...prevpost,
      { title, content, author, id: list + 1 },
    ]);
    setTitle("");
    setContent("");
    setAuthor("");
  };

  const deleteFunc = (id) => {
    setList((prePost) => prePost.filter((value) => value.id !== id));
  };

  return (
    <>
      <div className="pl-10">
        {list.map((list, index) => (
          <div className="mt-" key={index}>
            <h1 className="text-2xl">{list.title}</h1>
            <p className="mt-4">{list.content}</p>
            <p className="mt-5 underline">{list.author}</p>
            <button
              onClick={() => deleteFunc(list.id)}
              className="bg-red-700 text-white px-4 py-1 rounded mt-2 cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="ml-10 mt-20">
        <div className="">
          <label htmlFor="">Title</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border ml-4 p-2 rounded"
            type="text"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Content</label>
          <input
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="border ml-4 p-2 rounded"
            type="text"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Author</label>
          <input
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            className="border ml-4 p-2 rounded"
            type="text"
          />
        </div>
        <button
          className="px-10 py-4 bg-blue-700 font-bold rounded mt-6 cursor-pointer text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Input_control;
