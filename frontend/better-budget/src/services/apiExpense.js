import supabase from "./supabase";

export async function getExpenses() {
  // Supabase handles the filtering for user_id.
  const { data, error } = await supabase.from("Expense").select();

  console.log(data);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createExpense(expenseData) {
  console.log(expenseData);

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(userError.message);
  }

  const userId = user.id;

  const { data, error } = await supabase
    .from("Expense")
    .insert({
      user_id: userId,
      date: expenseData.date,
      store: expenseData.store,
      payment_method: expenseData.paymentMethod,
      reoccuring: expenseData.reoccuring,
      description: expenseData.description,
      expense_type: expenseData.expenseType,
      total_cost: expenseData.cost,
    })
    .select();

  console.log(error);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
