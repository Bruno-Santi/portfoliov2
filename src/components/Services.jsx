import { Section } from "./common/Section";
import { proyectos } from "../data";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { Reveal } from "../ui";

export const Services = () => {
  return (
    <Reveal>
      <Section
        title='Proyectos'
        subtitule='Estos proyectos representan una parte significativa de mi trabajo reciente y reflejan mi compromiso y experiencia en el campo en el que he estado trabajando.'
      >
        <div className='grid gap-8  lg:grid-cols-3 lg:gap-14'>
          {proyectos.map(({ id, title, photo, github, demo, tags }) => {
            return (
              <>
                <div key={id} className='max-w-lg flex shadow-lg shadow-gray-500 overflow-hidden rounded-2xl'>
                  <img key={id} src={photo} alt={title} className='w-2/3' />
                  <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                    <h2 className='mt-5 text-base font-bold'>{title}</h2>
                    <a href={github}>
                      <FaGithub />
                    </a>
                    <a href={demo}>
                      <FaExternalLinkSquareAlt />
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Section>
    </Reveal>
  );
};
