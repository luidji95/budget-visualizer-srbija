import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { immutableBudgetData } from "../data/budgetData";
import { FC } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type BudgetItem = {
  label: string;
  amount: number;
};

interface Props {
  userBudget?: BudgetItem[];
}

const formatLargeAmount = (value: number): string => {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)} milijardi €`;
  } else if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)} miliona €`;
  }
  return `${value.toLocaleString("sr-RS")} €`;
};

const BudgetComparisonChart: FC<Props> = ({ userBudget }) => {
  const safeUserBudget = Array.isArray(userBudget)
    ? userBudget
    : immutableBudgetData.map((item) => ({ ...item }));

  const labels = immutableBudgetData.map((item) => item.label);
  const officialData = immutableBudgetData.map((item) => item.amount);
  const userData = safeUserBudget.map((item) => item.amount);

  const totalOfficial = officialData.reduce((sum, v) => sum + v, 0);

  const data = {
    labels,
    datasets: [
      {
        label: "Zvanični budžet",
        data: officialData,
        backgroundColor: "rgba(99, 132, 255, 0.6)",
      },
      {
        label: "Tvoj budžet",
        data: userData,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: `Poređenje budžeta (ukupno: ${formatLargeAmount(totalOfficial)})`,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const value = context.raw;
            return `${context.dataset.label}: ${formatLargeAmount(value)}`;
          },
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
};

export default BudgetComparisonChart;
