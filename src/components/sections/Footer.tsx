import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <p className="text-center">
                &copy; 2024 Marek Hric. {t("footer.line1")}
            </p>
            <p className="text-center">{t("footer.line2")}</p>
        </footer>
    );
}

export default Footer;
