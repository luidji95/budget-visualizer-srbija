import { rawBudgetData } from "../data/budgetData";
import "./BudgetLegend.css";

const total = rawBudgetData.reduce((sum, item) => sum + item.amount, 0);

const BudgetLegend = () => {
  return (
    <ul className="legend-list">
      {rawBudgetData.map((item, index) => {
        const percent = ((item.amount / total) * 100).toFixed(1); // preciznije
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
        return (
          <li key={item.label} className="legend-item">
            <span
              className="legend-dot"
              style={{ backgroundColor: colors[index % colors.length] }}
            ></span>
            <span className="legend-label">{item.label}</span>
            <span className="legend-percent">{percent}%</span>
          </li>
        );
      })}
    </ul>
  );
};

export default BudgetLegend;
