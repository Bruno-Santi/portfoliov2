import { forwardRef } from "react";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";
import { Link } from "react-scroll";

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className='bg-white text-gray-900 dark:bg-gray-900   dark:text-gray-100 sticky navBar'>
      <nav className='flex justify-between items-center p-6 sticky navBar'>
        <div className='flex mr-4'>
          <h1 className='lg:text-xl  text-gray-400 tracking-wide text-md font-light px-4 cursor-pointer duration-300 hover:text-rose-600'>
            <Link to='servicios' spy={true} smooth={true} duration={700} offset={0} isDynamic={true}>
              Proyectos
            </Link>
          </h1>
          <h1 className='lg:text-xl text-gray-400 tracking-wide text-md font-light px-4 cursor-pointer duration-300 hover:text-rose-600'>
            <Link to='tecnologias' spy={true} smooth={true} duration={700} offset={0} isDynamic={true}>
              Tecnologias
            </Link>
          </h1>
          <h1 className='lg:text-xl tracking-wide text-gray-400 text-md font-light  px-4 cursor-pointer duration-300 hover:text-rose-600'>
            <Link to='contacto' spy={true} smooth={true} duration={700} offset={0} isDynamic={true}>
              Contacto
            </Link>
          </h1>
        </div>
        <div onClick={() => setDarkMode(!darkMode)}>
          {!darkMode ? (
            <MdNightlightRound className='text-3xl  animate-pulse cursor-pointer duration-300 hover:text-rose-600' />
          ) : (
            <MdWbSunny className='text-3xl animate-pulse  cursor-pointer duration-300 hover:text-rose-600' />
          )}
        </div>
      </nav>
    </header>
  );
};
