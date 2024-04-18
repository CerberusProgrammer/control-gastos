import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="" alt="" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-ping600 w-full p-2 text-white rounded-lg font-bold"
        >
          Reset
        </button>

        <AmountDisplay label="Presupuesto" amount={300} />
        <AmountDisplay label="Disponible" amount={150} />
        <AmountDisplay label="Gastado" amount={75} />
      </div>
    </div>
  );
}
