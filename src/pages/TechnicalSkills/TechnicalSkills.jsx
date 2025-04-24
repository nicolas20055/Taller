import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'
import { CardInfoAnimated } from '../../Ul/CardInfoAnimated/CardInfoAnimated'
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaCss3Alt  } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import  Code from '../../assets/images/Code.png';
import Git from '../../assets/images/Git.png';
import  GitHub from '../../assets/images/GitHub.png';
import Vs from '../../assets/images/VS.png';

export function TechnicalSkills() {
  const icons = [
    <FaJava />,
    <IoLogoJavascript />,
    <FaReact />,
    <TbBrandCSharp />,
    <FaCss3Alt />,
    <SiTypescript />,
    <RiTailwindCssFill />
  ];

  return (
    <main className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col gap-4 justify-center items-center  max-w-3xl">
        <CardInfoAnimated
          title="Technical Skills"
          content="Lenguajes de programación que he aprendido."
          images={icons}
        />
        <CardInfo
          title="Technologies"
          content="Tecnologías que he aprendido."
          images={[Code, Git, GitHub, Vs]}
        />
      </div>
    </main>
  );
}