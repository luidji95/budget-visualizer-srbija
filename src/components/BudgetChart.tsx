import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { rawBudgetData } from "../data/budgetData";
import "./budgetChart.css";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const colors = [
  "#0066cc",
  "#004080",
  "#0099cc",
  "#336699",
  "#66cccc",
  "#99ccff",
  "#004466",
  "#6699cc",
  "#003366",
  "#3366cc",
  "#80bfff",
];

const formatAmount = (value: number) => {
  return value >= 1_000_000_000
    ? (value / 1_000_000_000).toFixed(1) + " milijardi €"
    : (value / 1_000_000).toFixed(0) + " miliona €";
};

const BudgetChart = () => {
  const labels = rawBudgetData.map((item) => item.label);
  const data = rawBudgetData.map((item) => item.amount);
  const total = data.reduce((sum, v) => sum + v, 0);

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label;
            const value = context.raw;
            const percent = ((value / total) * 100).toFixed(1);
            return `${label}: ${formatAmount(value)} (${percent}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="budget-chart-wrapper">
      <Doughnut data={chartData} options={options} />
      <div className="chart-center-label">{formatAmount(total)}</div>
    </div>
  );
};

export default BudgetChart;
