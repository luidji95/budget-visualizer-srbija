import BudgetChart from "./BudgetChart";
import "./BudgetIntroSection.css";
import BudgetLegend from "./BudgetLegend";

const BudgetIntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-text">
        <h2>Kako Srbija troši budžet?</h2>
        <p>
          Pogledaj kako izgleda zvanična raspodela državnog novca – i igraj se
          sa budžetom da vidiš šta bi ti menjao.
        </p>
      </div>

      <div className="chart-wrapper">
        <BudgetChart />
        <BudgetLegend />
      </div>
    </section>
  );
};

export default BudgetIntroSection;
