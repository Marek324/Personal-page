import meImg from "../../assets/tablo_small_c.jpg";
import { useTranslation, Trans } from "react-i18next";

function Home() {
    const { t } = useTranslation();
    return (
        <section id="sec_home" className="grid grid-cols-9 gap-5">
            <div className="col-span-7 col-start-2 grid grid-cols-5 gap-5">
                <div className="col-span-2 col-start-2 grid grid-rows-7">
                    <p className="text-center text-4xl row-span-5 row-start-2">
                        <Trans
                            i18nKey={t("home")}
                            components={{
                                1: <span className="text-accent font-black" />,
                            }}
                        />
                    </p>
                </div>
                <img src={meImg} alt="Image of me" className="object-contain" />
            </div>
        </section>
    );
}

export default Home;
