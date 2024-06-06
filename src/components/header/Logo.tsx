import logo from "../../assets/meno.svg";

function Logo() {
    return (
        <a
            href="/"
            className="w-full h-20 p-4 group transition-size duration-500 self-top hover:p-2"
        >
            <img
                src={logo}
                alt="Logo"
                className="size-fit w-full block transition-size duration-500"
            />
        </a>
    );
}

export default Logo;
