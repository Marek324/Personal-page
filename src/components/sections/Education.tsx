import { useTranslation } from "react-i18next";

interface EducationItem {
    school: string;
    degree: string;
    field: string;
    year: string;
}

function Education() {
    const { t } = useTranslation();

    const education: EducationItem[] = t("education.content", {
        returnObjects: true,
    });

    return (
        <section id="sec_education">
            <h2 className="text-5xl font-bold text-center pb-8">
                {t("education.title")}
            </h2>
            <ul className="py-8">
                {education.map((item, index) => (
                    <li key={index} className="flex">
                        <p className="h-full flex-start w-1/6">{item.year}</p>
                        <div className="flex flex-col ">
                            <p className="font-bold text-accent">
                                {item.school}
                            </p>
                            <p>{item.degree}</p>
                            <p>{item.field}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Education;
