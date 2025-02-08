import { useState } from "react";

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleAmount = (event) => {
    setAmount(event.target.value);
  }

  const addTransaction = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      id: 1,
      description,
      amount: parseFloat(amount),
    };
    setTransactions([newTransaction, ...transactions]);
    setDescription("");
    setAmount("");
  };

  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div>
      <h2>Expense Tracker</h2>
      <p>Balance: ${balance.toFixed(2)}</p>
      <form onSubmit={addTransaction}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescription}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={handleAmount}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.description}: ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
