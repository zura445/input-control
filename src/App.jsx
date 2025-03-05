import Info from "./Info.json";

function App() {
  return (
    <>
      <div className="">
        {Info.map((list, index) => (
          <div className="" key={index}>
            <h1 className="text-2xl">{list.title}</h1>
            <p className="mt-4">{list.content}</p>
            <p className="mt-5 underline">{list.author}</p>
            <button className="bg-red-700 text-white px-4 py-1 rounded mt-2 cursor-pointer">
              Delete
            </button>
          </div>
        ))}
      </div>
      <form className="ml-10 mt-20">
        <div className="">
          <label htmlFor="">Title</label>
          <input className="border ml-4 p-2 rounded" type="text" />
        </div>
        <div className="mt-4">
          <label htmlFor="">Content</label>
          <input className="border ml-4 p-2 rounded" type="text" />
        </div>
        <div className="mt-4">
          <label htmlFor="">Author</label>
          <input className="border ml-4 p-2 rounded" type="text" />
        </div>
        <button
          className="px-10 py-4 bg-blue-700 font-bold rounded mt-6 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
