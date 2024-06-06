import LanguageSelector from "./header/LanguageSelector";
import Menu from "./header/Menu";
import Logo from "./header/Logo";

function Header() {
    return (
        <header className="sticky ml-auto py-4 w-32 flex flex-col items-center justify-center h-screen select-none">
            <Logo />
            <Menu />
            <LanguageSelector />
        </header>
    );
}

export default Header;
