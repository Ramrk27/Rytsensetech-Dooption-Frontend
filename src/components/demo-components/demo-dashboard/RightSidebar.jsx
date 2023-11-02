import React, { useState } from "react";

const RightSidebar = ({ value }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {value === 'trade' && (
        <div class="col-start-8 col-end-10 ">
          <div class="w-full">
            <div class="bg-sky-950 text-center p-2">
              <button class="tab-button">Trades</button>
            </div>
            <div class="flex justify-center items-center ">
              <div class="  bg-gray-800 text-center p-2 font-semibold hover:bg-cyan-950 w-50 ">
                <button class="tab-button text-white  border-r-2 text-sm">
                  Open
                </button>
              </div>
              <div class="  bg-gray-800 text-center p-2 font-semibold hover:bg-cyan-950 w-50">
                {" "}
                <button class="tab-button text-white text-sm ">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {value === 'signal' && (
        <div class="col-start-8 col-end-10 ">
          <div class="w-full">
            <div class="bg-sky-950 text-center p-2">
              <button class="tab-button">Signals</button>
            </div>
            <div class="flex justify-center items-center ">
              <div class="  bg-gray-800 text-center p-2 font-semibold hover:bg-cyan-950 w-50 ">
                <button class="tab-button text-white  border-r-2 text-sm">
                  Updates
                </button>
              </div>
              <div class="  bg-gray-800  text-center p-2 font-semibold hover:bg-cyan-950 w-50">
                {" "}
                <button class="tab-button text-white text-sm">All</button>
              </div>
            </div>
            <div class="bg-gray-700 text-center p-1">
              <span class="tab-button text-sm">Currencies</span>
            </div>
            <div class="bg-gray-800 text-start p-2">
              <span class="tab-button "> AUD/CAD</span>
            </div>
          </div>
        </div>
      )}
      {value === 'social' && (
        <div class="col-start-8 col-end-10 ">
          <div class="w-full">
            <div class="bg-sky-950 text-center p-2">
              <button class="tab-button">Social Trading</button>
            </div>
            <div class="bg-gray-800 text-center p-2 relative">
              <span
                class="tab-button cursor-pointer text-sm"
                onClick={toggleDropdown}
              >
                Top Ranked Trades
              </span>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-1/2 ml-16 bg-gray-800 p-2 text-start ">
                  <div className="tab-button text-white ">
                    Top ranked traders for 24h
                  </div>
                  <div className="tab-button text-white">Top ranked trades</div>
                  <div className="tab-button text-white">Top 100 trades</div>
                  <div className="tab-button text-white">Search</div>
                </div>
              )}
            </div>
            <div class="flex justify-center items-center ">
              <div class="  bg-gray-700 text-center p-2 font-semibold hover:bg-cyan-950 w-50 ">
                <button class="tab-button text-white  border-r-2 text-sm">
                  Updates
                </button>
              </div>
              <div class="  bg-gray-700  text-center p-2 font-semibold hover:bg-cyan-950 w-50">
                {" "}
                <button class="tab-button text-white text-sm">All</button>
              </div>
            </div>
            <div class="bg-gray-800 text-center p-1">
              <span class="tab-button text-xs ">Demo Trading</span>
            </div>
            <div class="bg-gray-700 text-start p-2">
              <span class="tab-button text-sm"> AUD/CAD</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightSidebar;
