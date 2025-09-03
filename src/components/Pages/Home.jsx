
import{Frontpage, ProcessCircle, AboutSection, MissionSection } from './HomeComp/Frontpage.jsx';
import SmartBuildingSection from "./HomeComp/SmartBuildingSection.jsx";
import TestimonialsSection from "./HomeComp/TestimonialsSection.jsx";
import ExpertiseSection from "./HomeComp/ExpertiseSection.jsx";
import ContactSection from "./HomeComp/ContactSection.jsx";

export default function Home() {
  return (
    <>
      <Frontpage />
      <ProcessCircle />
      <AboutSection />
      <MissionSection />
      <SmartBuildingSection />
      <TestimonialsSection />
      <ExpertiseSection />
      <ContactSection />
    </>
  );
}