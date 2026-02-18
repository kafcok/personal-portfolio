import { createClient } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export function useBio({ q_key, lang }) {
  const { isLoading, data, error, status } = useQuery({
    queryKey: [q_key, lang],
    queryFn: getBio,
    retry: false,
  });

  async function getBio() {
    const { data, error } = await supabase
      .from(q_key)
      .select(`header_${lang}, description_${lang}`)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();
    if (error) {
      throw new Error(`"error loading" ${q_key}`);
    }
    return data;
  }

  return { isLoading, data, error, status };
}
