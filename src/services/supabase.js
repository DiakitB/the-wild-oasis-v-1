import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iyqiqzanfhqrpsjpjrtc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5cWlxemFuZmhxcnBzanBqcnRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NzU4MDIsImV4cCI6MjAxNjQ1MTgwMn0.63qUH_Vd2wvDhnJ3LMSVDqIKVtZu21qQ-2vtUod7qoc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
