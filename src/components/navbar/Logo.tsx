import logo from "../../assets/meno.svg";

function Logo() {
    return (
        <a
            href="/"
            className="h-20 w-full group transition-size duration-300 self-top flex items-center justify-center pt-4"
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
