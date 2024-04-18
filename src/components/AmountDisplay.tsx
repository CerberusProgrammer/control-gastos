import { formatCurrency } from "../utils/utils";

type AmoutDisplayProps = {
  label?: string;
  amount: number;
};

export default function AmountDisplay({
  label,
  amount: amout,
}: AmoutDisplayProps) {
  return (
    <>
      <p className="text-blue-600 font-bold text-2xl">
        {label} : {""}
        <span className="font-black text-black">{formatCurrency(amout)}</span>
      </p>
    </>
  );
}
