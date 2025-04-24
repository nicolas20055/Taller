import React from 'react'

export const Certificate = ({ url, titleCertificate }) => {
  return (
    
      
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          id="certificatees"
          className="text-center justify-center  p-5 gap-5 justify-items-center bg-custom-50 max-w-[300px] h-[130px] flex flex-colunderline items-center  rounded-md shadow-md hover:shadow-lg transition duration-300"
        >
          <h4>{titleCertificate}</h4>
        </a>
      
    
  )
}

export default Certificate