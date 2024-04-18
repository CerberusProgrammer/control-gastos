import { Expense } from "./Expense";

export type DraftExpense = Omit<Expense, "id">;
