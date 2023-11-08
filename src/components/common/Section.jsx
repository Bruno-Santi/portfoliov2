import React from "react";

export const Section = ({ title, subtitule, children }) => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center py-16 my-6 px-5 text-center '>
      <h3 className='py-3 mb-2 text-4xl lg:text-6xl'>{title}</h3>
      <p className='max-w-xl font-light text-gray-400  tracking-wide mb-10 text-sm md:text-base'>{subtitule}</p>
      {children}
    </section>
  );
};
