import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Privacy from "./pages/Privacy.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import SolutionsPage from "./pages/SolutionsPage.jsx";
import Terms from "./pages/Terms.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
