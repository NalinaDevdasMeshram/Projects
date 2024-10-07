import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Experiences from "./Components/Experiences/Experiences";
import Header from "./Components/Headers/Header";
import Nav from "./Components/Nav/Nav";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
