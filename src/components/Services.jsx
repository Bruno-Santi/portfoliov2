import { Section } from "./common/Section";
import { proyectos } from "../data";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { Reveal } from "../ui";

export const Services = () => {
  return (
    <div className=''>
      <Reveal>
        <Section
          title='Proyectos'
          subtitule='Estos proyectos representan una parte significativa de mi trabajo reciente y reflejan mi compromiso y experiencia en el campo en el que he estado trabajando.'
        >
          <div className='grid gap-8  lg:grid-cols-3 lg:gap-14'>
            {proyectos.map(({ id, title, photo, github, demo, tags }) => (
              <div key={id} className='relative'>
                <div className='max-w-lg flex shadow-lg shadow-gray-500 duration-500 hover:shadow-rose-600 overflow-hidden rounded-2xl'>
                  <img key={id} src={photo} alt={title} className='w-2/3' />
                  <div className='w-1/3 flex flex-col text-center items-center justify-evenly p-1'>
                    <h2 className='mt-5 lg:text-xl font-bold'>{title}</h2>
                    <div className='flex-col justify-items-center text-center justify-center'>
                      <span className='text-md '>Repositorio</span>
                      <a
                        className='text-4xl flex text-center justify-center duration-500 hover:text-rose-600'
                        href={github}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaGithub />
                      </a>
                    </div>
                    <div className='flex-col justify-items-center text-center justify-center'>
                      <span className='flex text-md'>Demo</span>
                      <a
                        className='text-4xl flex text-center justify-center duration-500 hover:text-rose-600'
                        href={demo}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaExternalLinkSquareAlt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className='inline-flex cursor-pointer duration-700 hover:text-rose-400 hover:bg-gray-100 mx-1 mt-4 lg:mt-4 items-center rounded-md bg-rose-400  px-2 py-1 text-xs lg:text-sm  text-gray-100 ring-1 ring-inset ring-red-600/10'
                    >
                      {tag}{" "}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>
    </div>
  );
};
