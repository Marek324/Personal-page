import { useTranslation } from "react-i18next";
import flag_sk from "../../assets/flag_sk.svg";
import flag_gb from "../../assets/flag_gb.svg";

function LanguageSelector() {
    const { t, i18n } = useTranslation();
    const currLang = i18n.language;

    const handleLanguageChange = () => {
        const newLang = currLang === "sk" ? "en" : "sk";
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={handleLanguageChange}
            className="h-28 w-full group transition-size duration-300 self-end pb-8  flex items-center justify-center"
        >
            <img
                src={currLang === "sk" ? flag_gb : flag_sk}
                alt={currLang === "sk" ? "Vlajka EN" : "Flag of SK"}
                title={t("changeLanguage")}
                className="block transition-size duration-300 w-1/5 group-hover:w-1/4"
            />
        </button>
    );
}

export default LanguageSelector;
