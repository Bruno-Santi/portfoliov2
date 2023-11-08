import React from "react";
import { Section } from "./common/Section";
import { Reveal } from "../ui";
import { techList } from "../data";
export const Technologies = () => {
  return (
    <Reveal>
      <Section title={"Tecnologias"} subtitule={"Estas son algunas de las tecnologias que domino."}>
        <div className='grid grid-cols-3 lg:grid-cols-6 gap-x-14 gap-y-6 '>
          {techList.map(({ id, name, icon }) => {
            return (
              <div key={id} className='flex flex-col text-center m-auto'>
                <p className='font-bold text-center text-gray-400'>{name}</p>
                <span key={id} className='text-7xl m-auto duration-300 hover:text-rose-600'>
                  {icon}
                </span>
              </div>
            );
          })}
        </div>
      </Section>
    </Reveal>
  );
};
