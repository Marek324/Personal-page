import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();

    return (
        <section id="sec_about" className="">
            <h2 className="text-5xl font-bold text-center pb-8 text-accent">
                {t("about.title")}
            </h2>

            <p className="text-center">{t("about.content")}</p>
        </section>
    );
}

export default About;
