import { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import H1 from "../Styles/H1";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

function Chart() {
  const sales = {
    datasets: [
      {
        data: [75, 25, 25, 25],
        backgroundColor: ["#EC8F5E", "#F3B664", "#F1EB90", "#9FBB73"],
      },
    ],
    labels: ["Completed", "Inprogress", "Returns", "Overdue Shipping"],
  };
  const Inventory = {
    datasets: [
      {
        data: [134, 17, 8, 5],
        backgroundColor: ["#EC8F5E", "#F3B664", "#F1EB90", "#9FBB73"],
      },
    ],
    labels: ["In stock items", "Out of Stock Items", "Low Stock Items", "Dead Stock Items"],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    
    <div className="mt-5 border-[10px] p-2 gray-700 flex flex-wrap ">
      <div className="basis-1/2 ">
        <H1 data="Sales Order " />
        <div className="  pl-10 max-h-80">
          <Doughnut data={sales} height={100} width={200} options={options} />
        </div>
      </div>
      <div className="basis-1/2">
        <H1 data="Inventory" />
        <div className="pl-5 max-h-80">
          <Doughnut data={Inventory} height={100} width={200} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Chart;
