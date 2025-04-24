import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'

export function SocialSkills() {
  return (
    <main className="flex flex-col items-center p-6 sm:p-10">
     
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-red-500 bg-[length:200%_200%] animate-textGradient bg-clip-text text-transparent">
        Habilidades Sociales
      </h1>
      <div className="grid gap-6 p-10 sm:grid-cols-2 justify-items-center transition-all hover:scale-105">  
        <CardInfo
          title="Comunicación"
          content="Habilidad para comunicar ideas de manera efectiva."
          images={[]}
          customClass="small-card"
        />
        <CardInfo
          title="Trabajo en equipo"
          content="Capacidad para trabajar en equipo y colaborar con otros."
          images={[]}
          customClass="small-card"
        />
        <CardInfo
          title="Amable"
          content="Habilidad para ser amable y respetuoso con los demás."
          images={[]}
          customClass="small-card"
        />
        <CardInfo
          title="Resolución de conflictos"
          content="Capacidad para resolver conflictos de manera efectiva."
          images={[]}
          customClass="small-card"
        />
      </div>
    </main>
  )
}
