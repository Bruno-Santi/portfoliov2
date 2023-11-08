import { FaArrowDown } from "react-icons/fa";
import { Avatar } from "../assets";
import { ReverseReveal } from "../ui/index";
import { SOCIAL } from "../data";
import { Link } from "react-scroll";
export const Hero = () => {
  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");
    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });
  return (
    <ReverseReveal>
      <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <div className='mb-10'>
          <h2 className='lg:text-6xl text-4xl text-rose-600 uppercase tracking-wider font-semibold font-oswald'>
            Bruno Santimaria
          </h2>

          <h3 className=' text-2xl lg:text-4xl font-agbalumo tracking-tigh text-gray-300'>Desarrollador Front End</h3>
        </div>
        <p className='max-w-2xl text-md lg:text-xl font-light tracking-widest text-gray-400'>
          Hola <span className='animate-pulse text-4xl'>👋 </span>
          Soy un desarrollador front-end con experiencia en la creación de experiencias web impactantes y funcionales.
          Mi enfoque está en la tecnología y la creatividad, y mi objetivo es impulsar el éxito de los proyectos a
          través de la calidad y la usabilidad.
        </p>
        {/* social icons */}

        <div className='flex w-1/2 lg:w-3/6 justify-evenly py-7 lg:py-16 text-6xl  md:w-1/3'>
          {SOCIAL.map(({ id, link, icon }) => {
            return (
              <a
                href={link}
                key={id}
                target='_blank'
                rel='noreferrer'
                className='cursor-pointer duration-500 hover:text-rose-600 '
              >
                {icon}
              </a>
            );
          })}
        </div>
        <div>
          <img
            src={Avatar}
            alt='brunosantimaria-avatar'
            className=' duration-500 hover:shadow-rose-600 drop-shadow-2xl shadow-lg w-40 h-30 md:w-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-3xl rounded-full '
          ></img>
          <a
            href='./portfolio/public/BrunoSantimariaFrontEnd.pdf'
            download={true}
            className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 font-bold py-2 rounded-lg text-white duration-500 shadow-md hover:shadow-rose-600'
          >
            Descargar Curriculum<span></span>
          </a>
        </div>

        <div className='mt-6 down-arrow'>
          <Link to='servicios' spy={true} smooth={true} duration={700} offset={-100} isDynamic={true}>
            <FaArrowDown className='text-gray-400 mt-14 text-4xl animate-bounce cursor-pointer duration-500 hover:text-rose-600' />
          </Link>
        </div>
      </section>
    </ReverseReveal>
  );
};
