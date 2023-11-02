import React, { useState } from "react";
import Chart from "./Chart";
import HeaderSam from "./HeaderSam";
import RightSidebar from "./RightSidebar";

const DemoDashboard = () => {
  const [activeColumn, setActiveColumn] = useState(null);

  const toggleColumn = (columnName) => {
    if (activeColumn === columnName) {
      setActiveColumn(null); // Toggle off the active column
    } else {
      setActiveColumn(columnName); // Toggle on a new active column
    }
  };

  return (
    <div className="h-screen gap-6 p-10 font-quicksand bg-gray-900 text-gray-300">
      <HeaderSam />
      <div class="grid grid-cols-10 gap-4 mt-11 ">
        <div class="...">
          <div className="flex-col ">
            <div className="cursor-pointer ">
              <img
                src="/images/dashboard/stock-market.png"
                alt="Icon 4"
                class="lazy ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-5">Trading</p>
            </div>
            <div className="cursor-pointer ">
              <img
                src="/images/dashboard/money-bags.png"
                alt="Icon 4"
                class="lazy ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-5">Finance</p>
            </div>
            <div className="cursor-pointer ">
              <img
                src="/images/dashboard/user.png"
                alt="Icon 4"
                class="lazy ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-6">Profile</p>
            </div>
            <div className="cursor-pointer ">
              <img
                src="/images/dashboard/cart.png"
                alt="Icon 4"
                class="lazy ml-5"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-4">Market</p>
            </div>
            <div className="cursor-pointer ">
              <img
                src="/images/dashboard/medal.png"
                alt="Icon 4"
                class="lazy ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-1">Achievements</p>
            </div>
            <div>
              <img
                src="/images/dashboard/chat.png"
                alt="Icon 4"
                class="lazy ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-7">Chat</p>
            </div>
            <div className="cursor-pointer ">
              <img
                src="/images/dashboard/help.png"
                alt="Icon 4"
                class="lazy ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-7">Help</p>
            </div>
          </div>
        </div>

        <div
          class={`col-start-2  ${
            activeColumn === "trade" ||
            activeColumn === "signal" ||
            activeColumn === "social"
              ? "col-end-7"
              : "col-end-9"
          }`}
        >
          <Chart />
        </div>

        <div class="...">
          <div className="flex-col ">
            <div className="border border-gray-500 rounded p-2 mt-2 text-center cursor-pointer">
              <p>Timer: 00:00:00</p>
            </div>
            <div className="border border-gray-500 rounded p-2 mt-2 text-center cursor-pointer">
              <p>Amount: $10</p>
            </div>
            <div className="border-dotted border border-gray-500 rounded p-2 mt-2 text-center ">
              <div className="h-25">
                <p className="mb-1 text-gray-500 text-sm">Payout</p>
                <p className="text-green-500 text-sm mb-1">+84</p>
                <p className="text-green-500 text-sm mb-1">$64</p>
                <p className="text-gray-500 text-sm mb-1">Profit</p>
                <p className="text-gray-500 text-sm mb-1">$80</p>
              </div>
            </div>
            <div className=" bg-green-600 border border-gray-500 rounded p-2 mt-2 text-center hover:bg-green-900 ">
              <button className="text-green-950 font-bold  ">HIGHER</button>
            </div>
            <div className=" bg-red-600 border border-gray-500 rounded p-2 mt-2 text-center hover:bg-red-900">
              <button className="text-green-950 font-bold">LOWER</button>
            </div>
          </div>
        </div>

        <RightSidebar value={activeColumn} />
        <div class="">
          <div className="flex-col ">
            <div
              onClick={() => {
                toggleColumn("trade");
              }}
            >
              <img
                src="/images/dashboard/trades.png"
                alt="Icon 4"
                class="lazy cursor-pointer ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-5">Trades</p>
            </div>
            <div
              onClick={() => {
                toggleColumn("signal");
              }}
            >
              <img
                src="/images/dashboard/signals.png"
                alt="Icon 4"
                class="lazy cursor-pointer ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-5">Signals</p>
            </div>
            <div
              onClick={() => {
                toggleColumn("social");
              }}
            >
              <img
                src="/images/dashboard/trend.png"
                alt="Icon 4"
                class="lazy cursor-pointer ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-2">
                Social Trading
              </p>
            </div>
            <div>
              <img
                src="/images/dashboard/express.png"
                alt="Icon 4"
                class="lazy cursor-pointer ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-2">
                Express Trades
              </p>
            </div>
            <div>
              <img
                src="/images/dashboard/win.png"
                alt="Icon 4"
                class="lazy cursor-pointer ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-2">Tournaments</p>
            </div>
            <div>
              <img
                src="/images/dashboard/pending.png"
                alt="Icon 4"
                class="lazy cursor-pointer ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-2">
                Pending Trades
              </p>
            </div>
            <div>
              <img
                src="/images/dashboard/hotkeys.png"
                alt="Icon 4"
                class="lazy cursor-pointer ml-6"
                loading="lazy"
                style={{ width: "40px", height: "40px" }}
              />
              <p class="why-list__title font-semibold text-xs ml-5">Hotkeys</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDashboard;
