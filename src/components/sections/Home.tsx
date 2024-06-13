import meImg from "../../assets/tablo_small_c.jpg";
import { Trans } from "react-i18next";

function Home() {
    return (
        <section id="sec_home" className="flex h-96">
            <div className="flex-start basis-2/3 flex flex-col justify-center">
                <p className="text-center text-4xl p-5 ">
                    <Trans
                        i18nKey="home"
                        components={{
                            1: <span className="text-accent font-black" />,
                        }}
                    />
                </p>
            </div>
            <img
                src={meImg}
                alt="Image of me"
                className="flex-end basis-1/3 object-contain"
            />
        </section>
    );
}

export default Home;
