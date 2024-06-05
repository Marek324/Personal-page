import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

function LanguageSelector() {
    const { t, i18n } = useTranslation();
    const currLang = i18n.language;

    const handleLanguageChange = () => {
        const newLang = currLang === "sk" ? "en" : "sk";
        i18n.changeLanguage(newLang);
    };

    return (
        <button onClick={handleLanguageChange}>
            <ReactCountryFlag
                countryCode={currLang === "sk" ? "GB" : "SK"}
                svg
                // title={`${
                //     currLang === "sk"
                //         ? "Change language to English"
                //         : " Zmeň jazyk do Slovenčiny"
                // }`}
                title={t("changeLanguage")}
            />
        </button>
    );
}

export default LanguageSelector;
