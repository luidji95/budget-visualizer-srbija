import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { budgetData } from "../data/budgetData";
import "./BudgetChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

// 👉 Custom plugin za prikaz teksta u sredini
const centerTextPlugin: Plugin = {
  id: "centerText",
  beforeDraw(chart) {
    const { width } = chart;
    const { ctx } = chart;
    const total = budgetData.reduce((sum, item) => sum + item.amount, 0);
    const displayText = `${(total / 1_000_000).toFixed(0)} miliona €`;

    ctx.save();
    ctx.font = "bold 20px system-ui";
    ctx.fillStyle = "#222";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(displayText, width / 2, chart.height! / 2);
  },
};

ChartJS.register(centerTextPlugin);

const data = {
  labels: budgetData.map((item) => item.label),
  datasets: [
    {
      label: "Budžet (€)",
      data: budgetData.map((item) => item.amount),
      backgroundColor: [
        "#0066cc",
        "#004080",
        "#0099cc",
        "#336699",
        "#66cccc",
        "#99ccff",
      ],
      borderWidth: 0,
      cutout: "65%", // debljina prstena
    },
  ],
};

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // sakrij default legendu
    },
  },
};

const BudgetChart = () => {
  return (
    <div className="chart-container">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default BudgetChart;
