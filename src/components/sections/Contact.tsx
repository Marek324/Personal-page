import { useTranslation } from "react-i18next";
import ContactItem from "../Contact/ContactItem";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const contactItems = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/hric-marek/",
        icon: faLinkedin as IconProp,
    },
    {
        name: "GitHub",
        link: "https://github.com/Marek324",
        icon: faSquareGithub as IconProp,
    },
];

function Contact() {
    const { t } = useTranslation();
    return (
        <section id="sec_contact" className="py-8">
            <h2 className="text-5xl font-bold text-center text-accent">
                {t("contact")}
            </h2>
            <div className="flex justify-center items-center">
                {contactItems.map((item, index) => (
                    <ContactItem
                        key={index}
                        name={item.name}
                        link={item.link}
                        icon={item.icon}
                    />
                ))}
            </div>
        </section>
    );
}

export default Contact;
