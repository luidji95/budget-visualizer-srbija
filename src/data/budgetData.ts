export interface BudgetItem {
  label: string;
  amount: number;
  category?: string; // povezano s aferama (opciono)
}

export const budgetData: BudgetItem[] = [
  { label: "Zdravstvo", amount: 400_000_000, category: "Zdravstvo" },
  { label: "Prosveta", amount: 250_000_000, category: "Prosveta" },
  { label: "Vojska", amount: 500_000_000, category: "Vojska" },
  {
    label: "Subvencije stranim investitorima",
    amount: 300_000_000,
    category: "Subvencije",
  },
  { label: "SNS mediji i propaganda", amount: 80_000_000, category: "Mediji" },
  { label: "Beograd na vodi", amount: 250_000_000, category: "Infrastruktura" },
];
