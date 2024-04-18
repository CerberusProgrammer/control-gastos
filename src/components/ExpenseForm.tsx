import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { categories } from "../data/categories";
import { ChangeEvent, useState } from "react";
import { DraftExpense } from "../types/DraftExpense";
import { Value } from "../types/Expense";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    name: "",
    category: "",
    date: new Date(),
  });

  const [error, setError] = useState("");
  const { dispatch } = useBudget();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);

    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    });
  };

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(expense);

    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    dispatch({ type: "add-expense", payload: { expense } });
    setExpense({
      amount: 0,
      name: "",
      category: "",
      date: new Date(),
    });
  };

  return (
    <form action="" className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
        Nuevo gasto
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xl">
          Gasto:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={expense.name}
          onChange={handleChange}
          placeholder="Añade el nombre del gasto"
          className=" bg-slate-200 p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad
        </label>
        <input
          type="number"
          value={expense.amount}
          name="amount"
          id="amount"
          onChange={handleChange}
          placeholder="Añade el nombre del gasto"
          className=" bg-slate-200 p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseAmount" className="text-xl">
          Categoria
        </label>
        <select
          id="category"
          name="category"
          className=" bg-slate-200 p-2"
          defaultValue={expense.category}
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={expense.category}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseAmount" className="text-xl">
          Fecha gasto
        </label>
        <DatePicker
          className=" bg-slate-100 p-2 border-0"
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full rounded-lg p-2 text-white uppercase font-bold"
        value={"Registrar gasto"}
      />
    </form>
  );
}
