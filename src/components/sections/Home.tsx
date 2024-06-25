import meImg from "../../assets/tablo_small_c.jpg";
import { useTranslation, Trans } from "react-i18next";

function Home() {
    const { t } = useTranslation();
    return (
        <section id="sec_home" className="grid grid-cols-4 gap-5">
            <div className="col-span-3 grid grid-rows-5">
                <p className="text-center text-4xl row-start-3">
                    <Trans
                        i18nKey={t("home")}
                        components={{
                            1: <span className="text-accent font-black" />,
                        }}
                    />
                </p>
            </div>
            <img src={meImg} alt="Image of me" className="object-contain" />
        </section>
    );
}

export default Home;
