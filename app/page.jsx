import App from "../src/App";
import Box from "../src/Box";
import Grid from "../src/Grid";
import { getPortfolioData } from "../src/lib/portfolioData";
import Bio from "../src/sections/Bio";
import Contact from "../src/sections/Contact";
import Education from "../src/sections/Education";
import Experience from "../src/sections/Experience";
import Languages from "../src/sections/Languages";
import Passions from "../src/sections/Passions";
import Strengths from "../src/sections/Strengths";
import TechStack from "../src/sections/TechStack";
import { Disclaimer } from "../src/sections/ServerSections";

export default async function Page({ searchParams }) {
  const lang =
    searchParams?.lang === "pl" || searchParams?.lang === "en"
      ? searchParams.lang
      : "en";
  const initialLang =
    searchParams?.lang === "pl" || searchParams?.lang === "en"
      ? searchParams.lang
      : undefined;
  const isPdf = searchParams?.pdf === "true";
  const data = await getPortfolioData(lang);

  return (
    <App initialIsPdf={isPdf} initialLang={initialLang}>
      <Grid>
        <Box gridArea="contact" pdfOrder={1}>
          <Contact section={data.contact} lang={lang} isPdf={isPdf} />
        </Box>
        <Box gridArea="bio" pdfOrder={2}>
          <Bio section={data.bio} lang={lang} isPdf={isPdf} />
        </Box>
        <Box gridArea="tech" pdfOrder={3} pdfWidth={2}>
          <TechStack section={data.tech} lang={lang} isPdf={isPdf} />
        </Box>
        <Box gridArea="experience" pdfOrder={4} pdfWidth={2}>
          <Experience section={data.experience} lang={lang} isPdf={isPdf} />
        </Box>
        <Box gridArea="education" pdfOrder={5}>
          <Education section={data.education} lang={lang} isPdf={isPdf} />
        </Box>
        <Box gridArea="strengths" pdfOrder={7}>
          <Strengths section={data.strengths} lang={lang} isPdf={isPdf} />
        </Box>
        <Box gridArea="language" pdfOrder={6}>
          <Languages section={data.languages} lang={lang} isPdf={isPdf} />
        </Box>
        <Box gridArea="passions" pdfOrder={8}>
          <Passions section={data.passions} lang={lang} isPdf={isPdf} />
        </Box>
      </Grid>
      {isPdf ? <Disclaimer lang={lang} /> : null}
    </App>
  );
}
