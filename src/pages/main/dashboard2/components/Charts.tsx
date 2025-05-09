"use client";

import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

export function BarChart() {
  const data = {
    labels: [
      "Greater Accra",
      "Ashanti",
      "Western",
      "Eastern",
      "Central",
      "Northern",
    ],
    datasets: [
      {
        label: "Healthcare Workers",
        data: [650, 590, 420, 380, 290, 230],
        backgroundColor: "rgba(16, 185, 129, 0.7)",
        borderColor: "rgb(16, 185, 129)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[300px]">
      <Bar data={data} options={options} />
    </div>
  );
}

export function LineChart() {
  const data = {
    labels: [
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
    ],
    datasets: [
      {
        label: "Upcoming Retirements",
        data: [12, 15, 8, 10, 14, 18, 20, 25, 16, 12, 10, 8],
        borderColor: "rgb(234, 88, 12)",
        backgroundColor: "rgba(234, 88, 12, 0.5)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[300px]">
      <Line data={data} options={options} />
    </div>
  );
}

export function PieChart() {
  const data = {
    labels: [
      "Medical License",
      "Nursing License",
      "Specialist Cert.",
      "Other Certs",
    ],
    datasets: [
      {
        label: "Expiring Soon",
        data: [18, 12, 8, 4],
        backgroundColor: [
          "rgba(16, 185, 129, 0.7)",
          "rgba(234, 88, 12, 0.7)",
          "rgba(59, 130, 246, 0.7)",
          "rgba(168, 85, 247, 0.7)",
        ],
        borderColor: [
          "rgb(16, 185, 129)",
          "rgb(234, 88, 12)",
          "rgb(59, 130, 246)",
          "rgb(168, 85, 247)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[300px]">
      <Pie data={data} options={options} />
    </div>
  );
}
