import { createClient } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

const retries = false;

export function useBio({ q_key, lang }) {
  const { isLoading, data, error, status } = useQuery({
    queryKey: [q_key, lang],
    queryFn: getBio,
    retry: retries,
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

export function useTechStack({ q_key, lang }) {
  const { isLoading, data, error, status } = useQuery({
    queryKey: [q_key, lang],
    queryFn: getTechStack,
    retry: retries,
  });

  async function getTechStack() {
    const { data, error } = await supabase
      .from(q_key)
      .select(
        `
        header_${lang},
        tech_skills(id, image, level, label)
        `,
      )
      .limit(1)
      .single();
    if (error) {
      throw new Error(`"error loading" ${q_key}`);
    }
    return data;
  }
  return { isLoading, data, error, status };
}

export function useExperience({ q_key, lang }) {
  const { isLoading, data, error, status } = useQuery({
    queryKey: [q_key, lang],
    queryFn: getExperience,
    retry: retries,
  });

  async function getExperience() {
    const { data, error } = await supabase
      .from(q_key)
      .select(
        `
        header_${lang},
        experience_jobs(id, start_date, end_date, name, responsibilities_${lang}, function_${lang}, url)
        `,
      )
      .order("start_date", {
        referencedTable: "experience_jobs",
        ascending: false,
      })
      .limit(1)
      .single();
    if (error) {
      throw new Error(`"error loading" ${q_key}`);
    }
    return data;
  }

  return { isLoading, data, error, status };
}
