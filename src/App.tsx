import { Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
    return (
        <div className="text-text bg-background flex font-anonymous-pro">
            <Suspense fallback="Loading...">
                <Header />
                <Body />
            </Suspense>
        </div>
    );
}

export default App;
