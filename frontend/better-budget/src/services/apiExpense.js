import { getCurrentUserId } from "./apiAuthentication";
import { createStore, getStore } from "./apiStore";
import supabase from "./supabase";

export async function getExpenses() {
  // Supabase handles the filtering for user_id.
  const { data, error } = await supabase
    .from("expense")
    .select(
      "id, date, store(store_name), payment_method, reoccuring, description, total_cost, expense_type"
    );

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createExpense(expenseData) {
  console.log(expenseData);
  const storeName = expenseData.store.toLowerCase();
  let store;

  store = await getStore(storeName);

  if (store.length === 0) {
    store = await createStore(storeName);
  }

  const userId = await getCurrentUserId();

  const { data, error } = await supabase
    .from("expense")
    .insert({
      user_id: userId,
      date: expenseData.date,
      store: store[0].id,
      payment_method: expenseData.paymentMethod,
      reoccuring: expenseData.reoccuring,
      description: expenseData.description,
      expense_type: expenseData.expenseType,
      total_cost: expenseData.cost,
    })
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
