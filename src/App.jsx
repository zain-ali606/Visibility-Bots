

import './App.css'
import Navbar from './components/Pages/Header'
import {Home, ProcessCircle, AboutSection, MissionSection} from './components/Pages/Home'
import SmartBuildingSection from './components/Pages/SmartBuildingSection'
import ExpertiseSection from './components/Pages/ExpertiseSection'
import TestimonialsSection from './components/Pages/TestimonialsSection'
import ContactSection from './components/Pages/ContactSection'
import Footer from './components/Pages/Footer'


function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <ProcessCircle/>
    <AboutSection></AboutSection>
    <MissionSection></MissionSection>
    <SmartBuildingSection/> 
    <TestimonialsSection></TestimonialsSection>  
    <ExpertiseSection></ExpertiseSection>
    <ContactSection></ContactSection>
    <Footer/>
    
    </>
  )
}

export default App
