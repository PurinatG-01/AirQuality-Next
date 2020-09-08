import React, { useState, useEffect } from "react";
import { Bar, Line, Radar } from "react-chartjs-2";

const defaultData = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  datasets: [
    {
      label: "# of Votes 2",
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      backgroundColor: "rgba(255, 99, 132, 0.2)",

      borderColor: "rgba(255, 99, 132, 1)",

      borderWidth: 1,
    },
  ],
};

const defaultOptions = {
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const ChartJS = (props) => {
  const { newData, color, areaColor, label, options } = props;
  const [state, setState] = useState({
    labels: [],
    datasets: [
      {
        label: label,
        data: [],
        backgroundColor: areaColor,
        borderColor: color,
        borderWidth: 1,
        fontSize: 8,
      },
    ],
    showTooltips: false,
  });

  useEffect(() => {
    if (newData) {
      let temp_data = state.datasets[0].data;
      temp_data.push(newData.value);
      if (temp_data.length > 16) {
        temp_data.shift();
      }

      let temp_label = state.labels;
      temp_label.push(newData.label);
      if(temp_label.length> 16){
        temp_label.shift();
      }

      setState({
        ...state,
        label: temp_label,
        datasets: [
          {
            label: label ?? "Value",
            data: temp_data,
            backgroundColor: areaColor,
            fontSize: 8,
          },
        ],
      });
    }
  }, [newData]);

  return (
    <div>
      <Line
        data={state ?? defaultData}
        style={{ minWidth: 320 }}
        width={320}
        height={200}
        options={{
          maintainAspectRatio: false,
        }}
        options={options ?? defaultOptions}
        redraw
      />
    </div>
  );
};

export default ChartJS;
