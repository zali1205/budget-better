import { getCurrentUserId } from "./apiAuthentication";
import supabase from "./supabase";

export async function getPayment({ payment_type, payment_last_four_digits }) {
  const { data, error } = await supabase
    .from("payment")
    .select()
    .eq("payment_type", payment_type)
    .eq("payment_last_four_digits", payment_last_four_digits);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createPayment({
  payment_type,
  payment_last_four_digits,
}) {
  const userId = await getCurrentUserId();

  const { data, error } = await supabase
    .from("payment")
    .insert({
      user_id: userId,
      payment_type: payment_type,
      payment_last_four_digits: payment_last_four_digits,
    })
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
