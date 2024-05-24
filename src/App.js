
import NavbarComponent from "./components/navbar.js";
import HeaderComponent from "./components/header.js";
import AboutUs from "./components/about.js";
import WhyUs from "./components/WhyUs.js";
import Skill from "./components/Skill.js";
import Service from "./components/Services.js";
import Footer from "./components/Footer.js";
import OurTeam from "./components/Ourteam.js";
import SignIn from "./components/SignInModal.js";
import SignUp from "./components/SignUpModal.js";

function App() {
  return (
  <>
    <NavbarComponent/>
    <HeaderComponent/>
    <AboutUs/>
    <WhyUs/>
    <Skill/>
    <Service/>
    <OurTeam/>
    <SignIn/>
    <SignUp/>

    <Footer/>

  </>
  );
}

export default App;
