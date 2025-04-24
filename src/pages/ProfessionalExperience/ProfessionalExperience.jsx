import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'

export function ProfessionalExperience() {
  return (
        <main>
             <h1 className=' text-center text-2xl sm:text-3xl md:text-4xl  justify-center   font-bold bg-gradient-to-r from-blue-400 via-green-400 to-red-500 bg-[length:200%_200%] animate-textGradient bg-clip-text text-transparent flex flex-col items-center p-10 sm:p-6 md:p-8 lg:p-10'>Experiencia Profesional</h1>
           <div className=' transition-all hover:scale-105  flex-col items-center '>  
             <CardInfo
            
               content="Actualmente soy estudiante sena por lo cual no tengo experiencia laboral, pero cada dia con proyectos que hago voy aprendiendo  metodologias y tecnologias que me ayudan a mi crecimiento profesional y personal" 
               customClass="medium-card"
             />
         
           </div>
         </main>
  )
}
