import { MdNightlightRound, MdWbSunny } from "react-icons/md";

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className='bg-white text-gray-900 dark:bg-gray-900   dark:text-gray-100 sticky'>
      <nav className='flex justify-between items-center p-6 sticky'>
        <div className='flex'>
          <h1 className='lg:text-lg text-md font-bold px-4 cursor-pointer duration-300 hover:text-rose-600'>
            Proyectos
          </h1>
          <h1 className='lg:text-lg text-md font-bold px-4 cursor-pointer duration-300 hover:text-rose-600'>
            Tecnologias
          </h1>
          <h1 className='lg:text-lg text-md font-bold px-4 cursor-pointer duration-300 hover:text-rose-600'>
            Contacto
          </h1>
        </div>
        <div onClick={() => setDarkMode(!darkMode)}>
          {!darkMode ? (
            <MdNightlightRound className='text-3xl cursor-pointer duration-300 hover:text-rose-600' />
          ) : (
            <MdWbSunny className='text-3xl cursor-pointer duration-300 hover:text-rose-600' />
          )}
        </div>
      </nav>
    </header>
  );
};
