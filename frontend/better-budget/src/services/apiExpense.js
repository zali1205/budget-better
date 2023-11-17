import { getCurrentUserId } from "./apiAuthentication";
import { createPayment, getPayment } from "./apiPayment";
import { createStore, getStore } from "./apiStore";
import supabase from "./supabase";

export async function getExpenses() {
  // Supabase handles the filtering for user_id.
  const { data, error } = await supabase
    .from("expense")
    .select(
      "id, date, store_id(store_name), payment_method_id(payment_type, payment_last_four_digits), reoccuring, description, total_cost, expense_type"
    );

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createExpense(expenseData) {
  console.log(expenseData);

  const storeName = expenseData.store.toLowerCase();
  const paymentType = expenseData.paymentType.toLowerCase();

  let store;
  let payment_method;

  store = await getStore(storeName);

  if (store.length === 0) {
    store = await createStore(storeName);
  }

  payment_method = await getPayment({
    payment_type: paymentType,
    payment_last_four_digits: expenseData.paymentLastFour,
  });

  if (payment_method.length === 0) {
    payment_method = await createPayment({
      payment_type: paymentType,
      payment_last_four_digits: expenseData.paymentLastFour,
    });
  }

  const userId = await getCurrentUserId();

  console.log(store);

  const { data, error } = await supabase
    .from("expense")
    .insert({
      user_id: userId,
      date: expenseData.date,
      store_id: store[0].id,
      payment_method_id: payment_method[0].id,
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

export async function deleteExpense(expenseId) {
  const { data, error } = await supabase
    .from("expense")
    .delete()
    .eq("id", expenseId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
