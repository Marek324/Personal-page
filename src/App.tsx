import { Suspense } from "react";
import Header from "./components/Header";

function App() {
    return (
        <Suspense fallback="Loading...">
            <Header />
        </Suspense>
    );
}

export default App;
