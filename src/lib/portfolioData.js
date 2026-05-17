import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
);

async function single(query, section) {
  const { data, error } = await query;

  if (error) {
    return { data: null, error: `"error loading" ${section}` };
  }

  return { data, error: null };
}

export async function getPortfolioData(lang) {
  const [
    bio,
    tech,
    experience,
    education,
    contact,
    languages,
    passions,
    strengths,
  ] = await Promise.all([
    single(
      supabase
        .from("bio")
        .select(`header_${lang}, description_${lang}`)
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .single(),
      "bio",
    ),
    single(
      supabase
        .from("tech")
        .select(
          `
          header_${lang},
          tech_skills(id, icon, level, label, category)
        `,
        )
        .order("label", { referencedTable: "tech_skills", ascending: true })
        .limit(1)
        .single(),
      "tech",
    ),
    single(
      supabase
        .from("experience")
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
        .single(),
      "experience",
    ),
    single(
      supabase
        .from("education")
        .select(
          `
          header_${lang},
          education_school(id, start_date, end_date, name_${lang}, specialization_${lang})
        `,
        )
        .order("start_date", {
          referencedTable: "education_school",
          ascending: false,
        })
        .limit(1)
        .single(),
      "education",
    ),
    single(
      supabase
        .from("contact")
        .select(
          `
          header_${lang},
          content_${lang}
        `,
        )
        .limit(1)
        .single(),
      "contact",
    ),
    single(
      supabase
        .from("languages")
        .select(
          `
          header_${lang},
          languages_items(id, name_${lang}, level_${lang})
        `,
        )
        .limit(1)
        .single(),
      "languages",
    ),
    single(
      supabase
        .from("passions")
        .select(
          `
          header_${lang},
          passions_items(id, name_${lang}, image)
        `,
        )
        .order("order", {
          referencedTable: "passions_items",
          ascending: true,
        })
        .limit(1)
        .single(),
      "passions",
    ),
    single(
      supabase
        .from("strengths")
        .select(
          `
          header_${lang},
          strengths_pros(id, name_${lang})
        `,
        )
        .eq("strengths_pros.published", true)
        .limit(1)
        .single(),
      "strengths",
    ),
  ]);

  const skills = tech.data?.tech_skills ?? [];

  return {
    bio,
    tech: {
      ...tech,
      data: tech.data
        ? {
            header: tech.data[`header_${lang}`],
            primary: skills.filter((skill) => skill.category === 1),
            secondary: skills.filter((skill) => skill.category === 2),
            tertiary: skills.filter((skill) => skill.category === 3),
          }
        : null,
    },
    experience,
    education,
    contact,
    languages,
    passions,
    strengths,
  };
}
