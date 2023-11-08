import {} from "react-icons";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import Avatar from "../assets/brunologo.png";
import { ReverseReveal } from "./ReverseReveal";

export const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/bruno-santimaria",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://www.github.com/Bruno-Santi",
      icon: <FaGithub />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");
    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });
  return (
    <ReverseReveal>
      <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className='text-5xl text-rose-600 uppercase font-bold'>Bruno Santimaria</h2>

        <h3 className='py-3 text-2xl '>Desarrollador Front End</h3>
        <p className='max-w-2xl text-xl font-light text-gray-400'>
          Hola <span className='animate-pulse text-4xl'>👋 </span>
          Soy un desarrollador front-end con experiencia en la creación de experiencias web impactantes y funcionales.
          Mi enfoque está en la tecnología y la creatividad, y mi objetivo es impulsar el éxito de los proyectos a
          través de la calidad y la usabilidad.
        </p>
        {/* social icons */}

        <div className='flex justify-evenly py-7 lg:py-16 text-5xl w-full md:w-1/3'>
          {SOCIAL.map(({ id, link, icon }) => {
            return (
              <a
                href={link}
                key={id}
                target='_blank'
                rel='noreferrer'
                className='cursor-pointer duration-300 hover:text-rose-600 '
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
            className='w-40 h-30 md:w-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-2xl '
          ></img>
          <a
            href='./portfolio/public/BrunoSantimariaFrontEnd.pdf'
            download={true}
            className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600  font-bold py-2 rounded-lg text-white'
          >
            Descargar Curriculum<span></span>
          </a>
        </div>

        <div className='mt-10 down-arrow'>
          <FaArrowDown className='text-gray-400 text-2xl animate-bounce' />
        </div>
      </section>
    </ReverseReveal>
  );
};
