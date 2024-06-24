import LanguageSelector from "./navbar/LanguageSelector";
import Menu from "./navbar/Menu";
import Logo from "./navbar/Logo";

function Header() {
    return (
        <header className="grid grid-cols-1 fixed top-0 right-0 h-screen w-1/6 py-4 select-none">
            <Logo />
            <Menu />
            <LanguageSelector />
        </header>
    );
}

export default Header;
