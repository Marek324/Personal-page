import LanguageSelector from "./navbar/LanguageSelector";
import Menu from "./navbar/Menu";
import Logo from "./navbar/Logo";

function Header() {
    return (
        <header className="fixed top-0 right-0 h-screen w-1/6 py-4 flex flex-col items-center justify-center select-none">
            <Logo />
            <Menu />
            <LanguageSelector />
        </header>
    );
}

export default Header;
