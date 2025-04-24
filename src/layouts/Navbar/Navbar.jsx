import { useState } from "react";
import { ItemNav } from "../../components/ItemNav/ItemNav";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative">
            {/* Botón menú hamburguesa (visible en pantallas pequeñas) */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden text-white text-2xl focus:outline-none absolute right-4 top-4"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Menú de navegación */}
            <ul className={`
                flex flex-col md:flex-row gap-4 md:gap-6 
                fixed md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent 
                transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
                transition-transform md:transition-none p-6 md:p-0 
            `}>
                <ItemNav linksNav="home" myStyle="text-zinc-50" contentItem="Home" routes="/" />
                <ItemNav linksNav="clase 1" myStyle="text-zinc-50" contentItem="Habilidades Técnicas" routes="/TechnicalSkills" />
                <ItemNav linksNav="clase 2" myStyle="text-zinc-50" contentItem="Habilidades Sociales" routes="/SocialSkills" />
                <ItemNav linksNav="clase 3" myStyle="text-zinc-50" contentItem="Experiencia Profesional" routes="/ProfessionalExperience" />
                <ItemNav linksNav="clase 4" myStyle="text-zinc-50" contentItem="Estudios" routes="/Studies" />
            </ul>
        </nav>
    );
};
