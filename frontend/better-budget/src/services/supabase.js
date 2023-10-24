import { createClient } from "@supabase/supabase-js";
import config from "../../config.json";

// Create a single supabase client for interacting with your database
const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

export default supabase;
