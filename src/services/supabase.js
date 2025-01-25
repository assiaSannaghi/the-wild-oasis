import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kqpmyfuxqzzjilbzqtes.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcG15ZnV4cXp6amlsYnpxdGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5Mzg3NzUsImV4cCI6MjA1MjUxNDc3NX0.__BQwGwrp3t4f0XYnSZNrqH4cqlZE6BoCwvsX67XA9s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
