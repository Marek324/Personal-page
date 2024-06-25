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
        <section id="sec_education" className="">
            <h2 className="text-5xl font-bold text-center text-accent pb-8">
                {t("education.title")}
            </h2>
            <ul className="grid grid-cols-9">
                {/* na mobil pod seba */}
                <div className="col-span-7 col-start-2 grid grid-cols-2 gap-5">
                    {education.map((item, index) => (
                        <li
                            key={index}
                            className="bg-primary/20 rounded-xl grid grid-cols-3 p-5"
                        >
                            <p className="">{item.year}</p>
                            <div className="col-span-2">
                                <p className="font-bold text-accent">
                                    {item.school}
                                </p>
                                <p>{item.degree}</p>
                                <p>{item.field}</p>
                            </div>
                        </li>
                    ))}
                </div>
            </ul>
        </section>
    );
}

export default Education;
