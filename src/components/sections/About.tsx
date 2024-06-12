import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();

    return (
        <>
            <h2 className="text-5xl font-bold text-center pb-8">
                {t("about.title")}
            </h2>

            <p className="text-center">{t("about.content")}</p>
        </>
    );
}

export default About;
