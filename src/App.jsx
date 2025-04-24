import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProfessionalExperience } from "./pages/ProfessionalExperience/ProfessionalExperience";
import { SocialSkills } from "./pages/SocialSkills/SocialSkills";
import { TechnicalSkills } from "./pages/TechnicalSkills/TechnicalSkills";
import { Studies } from "./pages/Studies/Studies";
import { NotFound } from "./pages/NotFound/NotFound";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SocialSkills" element={<SocialSkills />} />
        <Route path="/ProfessionalExperience" element={<ProfessionalExperience />} />
        <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
        <Route path="/Studies" element={<Studies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
