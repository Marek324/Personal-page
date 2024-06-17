import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    return (
        <section id="sec_contact" className="py-8">
            <h2 className="text-5xl font-bold text-center text-accent">
                {t("contact")}
            </h2>
            <p>Get in touch with us.</p>
        </section>
    );
}

export default Contact;
