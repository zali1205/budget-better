import { getCurrentUserId } from "./apiAuthentication";
import supabase from "./supabase";

export async function getStore(storeName) {
  const { data, error } = await supabase
    .from("store")
    .select("store_name")
    .eq("store_name", storeName);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getStores() {
  const { data, error } = await supabase.from("store").select("id, store_name");

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return data;
}

export async function createStore(storeName) {
  const userId = await getCurrentUserId();

  const { data, error } = await supabase
    .from("store")
    .insert({ user_id: userId, store_name: storeName })
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
