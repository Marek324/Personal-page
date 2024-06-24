import logo from "../../assets/meno.svg";

function Logo() {
    return (
        <a
            href="#sec_home"
            className="group transition-size duration-300 bg-slate-500"
        >
            <img
                src={logo}
                alt="Logo"
                className="block transition-size duration-300 w-1/4 group-hover:w-1/3"
            />
        </a>
    );
}

export default Logo;
