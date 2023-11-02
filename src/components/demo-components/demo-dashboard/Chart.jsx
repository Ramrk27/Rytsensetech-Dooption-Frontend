import React, { useContext, useState } from "react";
import { mockHistoricalData } from "../../../constants/mock";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { convertUnixTimestampToDate } from "../../../utils/helpers/date-helpers";
import Cards from "./Cards";

const Chart = () => {
  const [filter, setFilter] = useState("1W");

  // const { darkMode } = useContext(ThemeContext);

  // const { stockSymbol } = useContext(StockContext);

  const [data, setData] = useState(mockHistoricalData);

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  const backgroundStyle = {
    backgroundImage: `url("/images/dashboard/trades.png")`, // Use your image URL here
    backgroundSize: "cover",
    padding: "16px",
  };
  return (
    <Cards>
      
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="#312e81"
                //   stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#312e81"
                //   stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#chartColor)"
          />
          <Tooltip />
          <XAxis dataKey={"data"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Cards>
  );
};

export default Chart;
