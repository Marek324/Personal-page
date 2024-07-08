import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();

    return (
        <section id="sec_about" className="grid grid-cols-9">
            <h2 className="text-5xl font-bold text-center pb-8 text-accent col-span-9">
                {t("about.title")}
            </h2>

            <p className="text-center col-span-7 col-start-2">
                {t("about.content")}
            </p>
        </section>
    );
}

export default About;
