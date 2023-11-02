import React, { useState } from "react";
import { mockSearchReasults } from "../../../constants/mock";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
const Search = () => {
  const [input, setInput] = useState("");

  const [bestMatches, setBestMatches] = useState(mockSearchReasults.result);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };
  const updateBestMatches = async () => {
    try {
      setBestMatches(mockSearchReasults.result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200">
        <input
          type="text"
          value={input}
          className="w-full px-4 py-2 focus:outline-none rounded-md text-black"
          placeholder="Search stock..."
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              updateBestMatches();
            }
          }}
        />
        {input && (
          <button onClick={clear}>
            <XIcon className="h-4 w-4 fill-gray-500" />
          </button>
        ) }

        <button onClick={updateBestMatches} className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2">
            <SearchIcon className="h-4 w-4 fill-gray-100"/>
        </button>
      </div>
    </div>
  );
};

export default Search;
