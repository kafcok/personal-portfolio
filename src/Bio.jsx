import { createClient } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export default function Bio() {
  //   const [bio, setBio] = useState("");
  const { t } = useTranslation();
  const q_key = "bio";

  const {
    isLoading,
    data: bio,
    error,
    status,
  } = useQuery({
    queryKey: [q_key],
    queryFn: getBio,
    retry: false,
  });

  // console.log(bio);

  async function getBio() {
    const { data, error } = await supabase
      .from(q_key)
      .select("description")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();
    if (error) {
      //   console.log(error);
      throw new Error(`${t("error loading")} ${t(q_key)}`);
    }
    return data;
  }

  if (error) {
    return <p className="text-error">{error.message}</p>;
  }

  if (isLoading) {
    return <p>{status}</p>;
  }

  return <p>{bio?.description}</p>;
}
