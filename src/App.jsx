import { useState } from "react";
import AllCards from "./components/AllCards";
import { data } from "./utils/data";
import './index.css'; 

function App() {
  const [val, setVal] = useState("");
  const [filterData, setFilterData] = useState(data);

  function fileHandler() {
    let res = data.filter((item) =>
      item.title.toLowerCase().includes(val.toLowerCase())
    );
    setFilterData(res);
  }

  return (
    <div className="bg-gray-100 p-4 flex flex-col items-center justify-center min-h-[100%] w-[100%] ">
      <div >
        <h1 className="text-4xl font-bold mb-4">
        <h1 class="purples">MiniMart</h1>
        <h1 class="mint">Delights</h1>
        </h1>
      </div>
      <div className="mb-4   ">
        <input
          type="text"
          placeholder="kya chahiye tujhe?"
          className="border p-2 mr-2 rounded-md outline-none md:pr-20 md:px-5"
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={fileHandler} className="bg-blue-500 text-white p-2 rounded-3xl px-5 hover:bg-blue-700 md:px-10">Search</button>
      </div>
      <AllCards data={filterData} />
    </div>
  );
}

export default App;
