import Layout from "./layout/Layout";

import BudgetIntroSection from "./components/BudgetIntroSection";
import AferaList from "./components/AferaList";
import BudgetSimulator from "./components/BudgetSimulator";
import Quiz from "./components/Quiz";
import StaJeMoglo from "./components/StaJeMoglo";

function App() {
  return (
    <Layout>
      <BudgetIntroSection />
      <BudgetSimulator />

      <AferaList />
      <StaJeMoglo />

      <Quiz />
    </Layout>
  );
}

export default App;
