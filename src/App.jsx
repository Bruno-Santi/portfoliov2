import { useState } from "react";
import { Header, Hero, Services } from "./components";
import "./index.css";
import { Reveal } from "./components/Reveal";
import { ReverseReveal } from "./components/ReverseReveal";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <Hero />

        <Services />
      </main>
    </div>
  );
}

export default App;
