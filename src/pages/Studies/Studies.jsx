import React from 'react'
import { Certificate } from '../Certificate/Certificate';
export function Studies() {
  return (
    <>
    <section id="certificatees" className=" flex flex-col ">
        <h1 className="text-3xl  flex justify-center items-center font-bold bg-gradient-to-r from-blue-400 via-green-400 to-red-500 bg-[length:200%_200%] animate-textGradient bg-clip-text text-transparent">Certificados</h1>
        <div className="  flex-col bg-custom-100 max-w-[300px]  flex  justify-center gap-15 underline rounded-md shadow-md hover:shadow-lg transition duration-300 ">

            <Certificate url={'https://drive.google.com/file/d/1-FrihVmC7pvSEo-MgzCKS_PNmUc0vhXA/view?usp=drive_link'} titleCertificate={'TÉCNICO EN'}/>
            <Certificate url={'https://drive.google.com/file/d/1H8MUPxwlAc1-ikLCSvTPxOs9Ya3OR-3_/view?usp=drive_link'} titleCertificate={'TÉCNICO EN'} />
            <Certificate url={'https://drive.google.com/file/d/19Kc_fFFLG8NJZ0E3l9EZpGtU7zXzV5TD/view?usp=drive_link'} titleCertificate={'TÉCNICO EN'}  />
            <Certificate url={'https://drive.google.com/file/d/1yDQgcRjjQ-lmVLg1deATEB6SGk7-PHjH/view?usp=drive_link'} titleCertificate={'CONSTANCIA PARTICIPACION'} />
            <Certificate url={'https://drive.google.com/file/d/186kgkGiuUCa_u8EryCCX9OaqiLASxcVI/view?usp=drive_link'} titleCertificate={'CONSTANCIA PARTICIPACION'} />
            
        </div>
    </section>
    </>
);
}

export default Studies
