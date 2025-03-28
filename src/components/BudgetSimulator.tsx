import { useState } from "react";
import { budgetData } from "../data/budgetData";
import "./BudgetSimulator.css";
import BudgetComparisonChart from "./BudgetComparisonChart";

const totalOriginal = budgetData.reduce((sum, item) => sum + item.amount, 0);

const BudgetSimulator = () => {
  const [userBudget, setUserBudget] = useState(() =>
    budgetData.map((item) => ({ ...item }))
  );

  const totalUser = userBudget.reduce((sum, item) => sum + item.amount, 0);

  const handleChange = (index: number, value: number) => {
    const newBudget = [...userBudget];
    newBudget[index].amount = value;
    setUserBudget(newBudget);
  };

  return (
    <section className="simulator-section">
      <h2>🧮 Simulator budžeta</h2>
      <p>
        Podesi koliko bi ti izdvojio za svaku stavku i uporedi svoj budžet sa
        zvaničnim.
      </p>

      <div className="sliders">
        {userBudget.map((item, index) => (
          <div key={item.label} className="slider-group">
            <label>
              {item.label}: {item.amount.toLocaleString("sr-RS")} €
            </label>
            <input
              type="range"
              min={0}
              max={totalOriginal}
              step={1000000}
              value={item.amount}
              onChange={(e) => handleChange(index, +e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="simulator-summary">
        <p>
          <strong>Tvoj budžet:</strong> {totalUser.toLocaleString("sr-RS")} €
        </p>
        {totalUser > totalOriginal ? (
          <p className="warning">Prekoračio si zvanični budžet!</p>
        ) : totalUser < totalOriginal ? (
          <p className="note">
            Nisi potrošio ceo budžet. Preostalo:{" "}
            {(totalOriginal - totalUser).toLocaleString("sr-RS")} €
          </p>
        ) : (
          <p className="success">
            Tvoj budžet se tačno poklapa sa zvaničnim. Bravo!
          </p>
        )}
      </div>
      <BudgetComparisonChart userBudget={userBudget} />
    </section>
  );
};

export default BudgetSimulator;
