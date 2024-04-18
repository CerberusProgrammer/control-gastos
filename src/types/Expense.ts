export type Expense = {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: Value;
};

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];
