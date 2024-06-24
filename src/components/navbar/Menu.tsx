import { useTranslation } from "react-i18next";

const menuItems = [
    { id: 0, name: "menu.education", ref: "#sec_education" },
    { id: 1, name: "menu.about", ref: "#sec_about" },
    { id: 2, name: "menu.skills", ref: "#sec_skills" },
    { id: 3, name: "menu.contact", ref: "#sec_contact" },
];

function Menu() {
    const { t } = useTranslation();
    return (
        <nav className="font-black text-center text-text/65 bg-slate-800 grid grid-cols-1">
            {menuItems.map((item) => (
                <a
                    key={item.id}
                    href={item.ref}
                    className="w-full h-10 p-2 transition-colors duration-300  hover:text-text group"
                >
                    <p className="inline transition-all text-base duration-300 border-transparent border-b-2 group-hover:text-lg group-hover:border-text">
                        {t(item.name)}
                    </p>
                </a>
            ))}
        </nav>
    );
}

export default Menu;
