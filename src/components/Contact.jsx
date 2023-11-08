import { useForm } from "react-hook-form";
import { Section } from "./common/Section";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      const serviceID = "service_vw83gnw";
      const templateID = "template_eyvee6a";
      const userID = "fJBB05iscgidunIyk";
      const emailData = {
        to_name: "Bruno",
        from_name: data.Nombre,
        message: data.Mensaje,
        email: data.Email,
      };
      emailjs
        .send(serviceID, templateID, emailData, userID)
        .then((response) => {
          Swal.fire("Correo enviado con exito!", "En el transcurso del dia tendras una respuesta", "success");
          reset();
        })
        .catch((error) => {
          console.error("Error al enviar el correo electrónico", error);
        });
    }
  };

  return (
    <Section title='Contacto' subtitule='Me encuentro abierto a nuevas propuestas.'>
      <div className='p-8 text-left w-full '>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='gap-4 lg:w-4/5 m-auto text-gray-300'>
            <div className='flex flex-col'>
              <label className='capitalize text-md py-2 font-normal'>Nombre</label>
              <input
                type='text'
                name='nombre'
                placeholder='Nombre'
                {...register("Nombre", { required: true, min: 1, maxLength: 15 })}
                className='border-2 rounded-lg p-3 flex focus:outlined-none border-gray-400 dark:bg-gray-900 dark:text-gray-300'
              ></input>
            </div>
            <div className='flex flex-col'>
              <label className='capitalize text-md py-2 font-normal'>Correo</label>
              <input
                type='Email'
                placeholder='Email'
                {...register("Email", { required: true, min: 1, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
                name='Email'
                className='border-2 rounded-lg p-3 flex focus:outlined-none border-gray-400 dark:bg-gray-900 dark:text-gray-300'
              ></input>
            </div>
            <div className='flex flex-col'>
              <label className='capitalize text-md py-2 font-normal'>Mensaje</label>
              <textarea
                type='text'
                name='mensaje'
                rows='10'
                {...register("Mensaje", { required: true, maxLength: 300 })}
                className='border-2 rounded-lg resize-none p-3 flex focus:outlined-none border-gray-400 dark:bg-gray-900 dark:text-gray-300'
              ></textarea>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-gray-300 px-6 py-3 cursor-pointer tracking-wider rounded-md hover:scale-105 duration-500'
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};
