import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Skills from "./sections/Skills";

function Body() {
    return (
        <div className="w-5/6 p-12">
            <About />
            <Education />
            <Skills />
            <Contact />
        </div>
    );
}

export default Body;
