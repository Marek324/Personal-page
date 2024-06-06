import { useTranslation } from "react-i18next";
// import ReactCountryFlag from "react-country-flag";
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
            className="w-full h-20 p-8 group transition-size duration-500 self-end hover:p-6"
        >
            <img
                src={currLang === "sk" ? flag_gb : flag_sk}
                alt={currLang === "sk" ? "Vlajka EN" : "Flag of SK"}
                title={t("changeLanguage")}
                className="size-fit w-full block transition-size duration-500"
            />
        </button>
    );
}

export default LanguageSelector;
