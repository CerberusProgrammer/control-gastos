import { categories } from "../data/categories";

export default function ExpenseForm() {
  return (
    <form action="" className="space-y-5">
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2"></legend>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Gasto:
        </label>
        <input
          type="text"
          name="expenseName"
          id="expenseName"
          placeholder="Añade el nombre del gasto"
          className=" bg-slate-200 p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseAmount" className="text-xl">
          Cantidad
        </label>
        <input
          type="text"
          name="expenseAmount"
          id="expenseAmount"
          placeholder="Añade el nombre del gasto"
          className=" bg-slate-200 p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseAmount" className="text-xl">
          Categoria
        </label>
        <select id="category" name="category" className=" bg-slate-200 p-2">
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
