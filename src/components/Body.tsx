import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Home from "./sections/Home";
import Skills from "./sections/Skills";

function Body() {
    return (
        <div className="w-5/6 p-12 text-2xl">
            <Home />
            <Education />
            <About />
            <Skills />
            <Contact />
        </div>
    );
}

export default Body;
