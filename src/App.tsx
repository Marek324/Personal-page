import { Suspense } from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

function App() {
    return (
        <div className="text-text bg-background flex font-anonymous-pro">
            <Suspense fallback="Loading...">
                <NavBar />
                <Body />
            </Suspense>
        </div>
    );
}

export default App;
