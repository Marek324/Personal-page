import { useTranslation } from "react-i18next";

function Education() {
    const { t } = useTranslation();

    return (
        <section>
            <h2>{t("education_section.title")}</h2>
            <p>Some education details here...</p>
        </section>
    );
}

export default Education;
