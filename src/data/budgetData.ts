export interface BudgetItem {
  label: string;
  amount: number;
  category?: string;
}

// 🧾 Glavni izvor podataka (realan budžet Srbije za 2025 ~22 milijarde €)
export const rawBudgetData: BudgetItem[] = [
  {
    label: "Penzije i socijalna pomoć",
    amount: 8_000_000_000,
    category: "Socijalna pomoć",
  },
  { label: "Zdravstvo", amount: 3_000_000_000, category: "Zdravstvo" },
  { label: "Prosveta", amount: 2_200_000_000, category: "Prosveta" },
  { label: "Vojska", amount: 1_000_000_000, category: "Vojska" },
  {
    label: "Policija i bezbednost",
    amount: 1_200_000_000,
    category: "Policija",
  },
  {
    label: "Subvencije stranim investitorima",
    amount: 1_000_000_000,
    category: "Subvencije",
  },
  {
    label: "Beograd na vodi i kapitalni projekti",
    amount: 900_000_000,
    category: "Infrastruktura",
  },
  { label: "Poljoprivreda", amount: 600_000_000, category: "Poljoprivreda" },
  { label: "SNS mediji i propaganda", amount: 300_000_000, category: "Mediji" },
  {
    label: "Administracija",
    amount: 1_000_000_000,
    category: "Administracija",
  },
  {
    label: "Otplate javnog duga i kamate",
    amount: 2_000_000_000,
    category: "Finansije",
  },
  { label: "Kultura i sport", amount: 300_000_000, category: "Kultura" },
  { label: "Životna sredina", amount: 500_000_000, category: "Ekologija" },
];

//  Nezavisna nepromenljiva kopija za Chart
export const immutableBudgetData: BudgetItem[] = rawBudgetData.map((item) =>
  Object.freeze({ ...item })
);

//  Helper funkcija za kopiranje user budgeta (koristiš u useState i reset)
export const getFreshBudgetData = (): BudgetItem[] =>
  rawBudgetData.map((item) => ({ ...item }));
