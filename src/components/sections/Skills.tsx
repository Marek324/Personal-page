import { useTranslation } from "react-i18next";

interface SkillsItem {
    name: string;
    level: string;
}

function Skills() {
    const { t } = useTranslation();

    const skills: SkillsItem[] = t("skills.content", {
        returnObjects: true,
    });
    return (
        <section id="sec_skills" className="py-8">
            <h2 className="text-5xl font-bold text-center text-accent">
                {t("skills.title")}
            </h2>
            <ul className="py-8">
                {skills.map((item, index) => (
                    <li key={index} className="flex mx-auto py-2">
                        <p className="font-bold flex-start basis-1/4 text-accent">
                            {item.name}
                        </p>
                        <p className="h-full  w-1/6">{item.level}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
