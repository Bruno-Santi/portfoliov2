import { useState } from "react";
import { Contact, Footer, Header, Hero, Services, Technologies } from "./components";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} servicesRef />

      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <Hero />
        <hr
          name='servicios'
          className=' mt-20 h-0.5 w-5/6 lg:w-3/6 m-auto border-t-0 bg-gray-400 opacity-100 dark:opacity-50'
        />
        <Services />
        <hr
          name='tecnologias'
          className=' mt-20 h-0.5 w-5/6 lg:w-3/6 m-auto border-t-0 bg-gray-400 opacity-100 dark:opacity-50'
        />
        <Technologies />
        <hr
          name='contacto'
          className=' mt-20 h-0.5 w-5/6 lg:w-3/6 m-auto border-t-1 border-dotted bg-gray-400 opacity-100 dark:opacity-50'
        />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
