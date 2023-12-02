import supabase from "./supabase";
import { getCurrentUserId } from "./apiAuthentication";
import { createPayment, getPayment } from "./apiPayment";
import { createStore, getStore } from "./apiStore";
import { toTitleCase } from "../utils/helper";
import { SIZE_PER_PAGE } from "../utils/constants";

export async function getExpenses(filter, sortBy, fromDate, toDate, page) {
  // Supabase handles the filtering for user_id.
  let query = supabase
    .from("expense")
    .select(
      "id, date, store_id(store_name), payment_method_id(payment_type, payment_last_four_digits), reoccuring, description, total_cost, expense_type",
      { count: "exact" }
    );

  if (filter) {
    query = query.eq(filter.field, toTitleCase(filter.value));
  }

  if (sortBy) {
    console.log("sorting");
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  } else {
    query = query
      .order("date", { ascending: false })
      .order("id", { ascending: false });
  }

  if (fromDate) {
    query = query.gte("date", fromDate);
  }

  if (toDate) {
    query = query.lte("date", toDate);
  }

  if (page) {
    const from = (page - 1) * SIZE_PER_PAGE;
    const to = from + SIZE_PER_PAGE - 1;
    query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return { data, count };
}

export async function createExpense(expenseData) {
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

export async function editExpense(oldExpenseData, newExpenseData) {
  console.log(oldExpenseData, newExpenseData);
  const storeName = newExpenseData.store.toLowerCase();
  const paymentType = newExpenseData.paymentType.toLowerCase();

  let store;
  let payment_method;

  store = await getStore(storeName);

  if (store.length === 0) {
    store = await createStore(storeName);
  }

  payment_method = await getPayment({
    payment_type: paymentType,
    payment_last_four_digits: newExpenseData.paymentLastFour,
  });

  if (payment_method.length === 0) {
    payment_method = await createPayment({
      payment_type: paymentType,
      payment_last_four_digits: newExpenseData.paymentLastFour,
    });
  }

  const userId = await getCurrentUserId();

  const { data, error } = await supabase
    .from("expense")
    .update({
      user_id: userId,
      date: newExpenseData.date,
      store_id: store[0].id,
      payment_method_id: payment_method[0].id,
      reoccuring: newExpenseData.reoccuring,
      description: newExpenseData.description,
      expense_type: newExpenseData.expenseType,
      total_cost: newExpenseData.cost,
    })
    .eq("id", oldExpenseData.id)
    .select(
      "id, date, store_id(store_name), payment_method_id(payment_type, payment_last_four_digits), reoccuring, description, total_cost, expense_type"
    );

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

export async function getTotalMonthlyExpenses(date) {
  const dateInput = new Date(date).toISOString();

  const { data, error } = await supabase.rpc("total_expenses", {
    date_input: dateInput,
  });

  console.log(data);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// const firstDay = new Date(
//   dateInput.getFullYear(),
//   dateInput.getMonth(),
//   0
// ).toISOString();
// const lastDay = new Date(
//   dateInput.getFullYear(),
//   dateInput.getMonth() + 1,
//   0
// ).toISOString();
// console.log(firstDay, lastDay);
// const { data, error } = await supabase
//   .from("expense")
//   .select(
//     "id, date, store_id(store_name), payment_method_id(payment_type, payment_last_four_digits), reoccuring, description, total_cost, expense_type"
//   )
//   .gte("date", firstDay)
//   .lte("date", lastDay);
