import { useState } from "react";
import { rawBudgetData, getFreshBudgetData } from "../data/budgetData";
import "./BudgetSimulator.css";
import BudgetComparisonChart from "./BudgetComparisonChart";

const totalOriginal = rawBudgetData.reduce((sum, item) => sum + item.amount, 0);

const formatAmount = (amount: number) => {
  return amount >= 1_000_000_000
    ? (amount / 1_000_000_000).toFixed(1) + " milijardi €"
    : (amount / 1_000_000).toFixed(0) + " miliona €";
};

const BudgetSimulator = () => {
  const [userBudget, setUserBudget] = useState(
    () => getFreshBudgetData() // ✅ bez sortiranja!
  );

  const totalUser = userBudget.reduce((sum, item) => sum + item.amount, 0);

  const handleChange = (index: number, value: number) => {
    const newBudget = [...userBudget];
    newBudget[index].amount = value;
    setUserBudget(newBudget);
  };

  const handleReset = () => {
    setUserBudget(getFreshBudgetData()); // ✅ bez sort!
  };

  return (
    <section className="simulator-section">
      <h2>🧮 Simulator budžeta</h2>
      <p>
        Podesi koliko bi ti izdvojio za svaku stavku i uporedi svoj budžet sa
        zvaničnim.
      </p>

      <div className="simulator-content">
        <div className="simulator-left">
          <div className="sliders">
            {userBudget.map((item, index) => (
              <div key={item.label} className="slider-group">
                <label>
                  {item.label}: {formatAmount(item.amount)} (
                  {((item.amount / totalOriginal) * 100).toFixed(1)}%)
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
              <strong>Tvoj budžet:</strong> {formatAmount(totalUser)}
            </p>
            {totalUser > totalOriginal ? (
              <p className="warning">Prekoračio si zvanični budžet!</p>
            ) : totalUser < totalOriginal ? (
              <p className="note">
                Nisi potrošio ceo budžet. Preostalo:{" "}
                {formatAmount(totalOriginal - totalUser)}
              </p>
            ) : (
              <p className="success">
                Tvoj budžet se tačno poklapa sa zvaničnim. Bravo!
              </p>
            )}
            <button className="reset-btn" onClick={handleReset}>
              🔁 Resetuj moj budžet
            </button>
          </div>
        </div>

        <div className="simulator-right">
          <BudgetComparisonChart userBudget={userBudget} />
        </div>
      </div>
    </section>
  );
};

export default BudgetSimulator;
