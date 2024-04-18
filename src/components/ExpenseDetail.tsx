import { useMemo } from "react";
import { Expense } from "../types/Expense";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";

type ExpenseDetailProps = {
  expense: Expense;
};

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
      <div>
        <p>{expense.name}</p>
        <p>{expense.date?.toString()}</p>
      </div>

      <AmountDisplay amount={expense.amount} />
    </div>
  );
}
