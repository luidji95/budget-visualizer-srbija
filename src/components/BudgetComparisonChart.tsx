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
import { budgetData } from "../data/budgetData";
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
  userBudget: BudgetItem[];
}

const BudgetComparisonChart: FC<Props> = ({ userBudget }) => {
  const labels = budgetData.map((item) => item.label);

  const officialData = budgetData.map((item) => item.amount);
  const userData = userBudget.map((item) => item.amount);

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
        text: "Poređenje: Tvoj vs Zvanični budžet",
      },
    },
  };

  return <Bar options={options} data={data} />;
};

export default BudgetComparisonChart;
