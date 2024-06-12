import { useTranslation } from "react-i18next";
import meImg from "../../assets/tablo_c.jpg";

function About() {
    const { t } = useTranslation();

    return (
        <>
            <h1 className="text-5xl font-bold text-center pb-8">
                {t("about_section.title")}
            </h1>
            <div className="flex">
                <div className="flex-start h-64 pr-8">
                    <p className="text-center">{t("about_section.content")}</p>
                </div>
                <div className="flex-end w-1/4 relative pl-8">
                    <img
                        className="w-48 h-64 object-cover"
                        src={meImg}
                        alt="Picture of me"
                    />
                </div>
            </div>
        </>
    );
}

export default About;
