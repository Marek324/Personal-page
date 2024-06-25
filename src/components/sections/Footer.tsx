import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <p className="text-center">{t("footer")}</p>
        </footer>
    );
}

export default Footer;
