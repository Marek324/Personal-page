import { useTranslation } from "react-i18next";

function Menu() {
    const { t } = useTranslation();
    return (
        <nav className="flex flex-col items-center justify-center font-black text-center text-text/65 my-auto">
            <a
                href="#sec_education"
                className="w-full h-10 p-2 transition-colors duration-300  hover:text-text group"
            >
                <p className="inline transition-all text-base duration-300 border-transparent border-b-2 group-hover:text-lg group-hover:border-text">
                    {t("menu.education")}
                </p>
            </a>
            <a
                href="#sec_about"
                className="w-full h-10 p-2 transition-colors duration-300  hover:text-text group"
            >
                <p className="inline transition-all text-base duration-300 border-transparent border-b-2 group-hover:text-lg group-hover:border-text">
                    {t("menu.about")}
                </p>
            </a>
            <a
                href="#sec_skills"
                className="w-full h-10 p-2 transition-colors duration-300  hover:text-text group"
            >
                <p className="inline transition-all text-base duration-300 border-transparent border-b-2 group-hover:text-lg group-hover:border-text">
                    {t("menu.skills")}
                </p>
            </a>
            <a
                href="#sec_contact"
                className="w-full h-10 p-2 transition-colors duration-300  hover:text-text group"
            >
                <p className="inline transition-all text-base duration-300 border-transparent border-b-2 group-hover:text-lg group-hover:border-text">
                    {t("menu.contact")}
                </p>
            </a>
        </nav>
    );
}

export default Menu;
