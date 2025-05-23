import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Interests from "./components/Interests/Interests";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppContent = () => {
  const { isDarkTheme } = useTheme();
  
  return (
    <div className={`${styles.App} ${!isDarkTheme ? styles.lightTheme : ''}`}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Interests />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
