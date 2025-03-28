import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Layout from "./layout/Layout";
import BudgetChart from "./components/BudgetChart";
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
