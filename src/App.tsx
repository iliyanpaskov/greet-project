import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CGoToTheTop } from "./components/common/CGoToTheTop/CGoToTheTop";
import { MainPage } from "./pages/MainPage/MainPage";


function App() {

    return (
        <>
            <Header />
            <MainPage />
            <CGoToTheTop />
            <Footer />
        </>
    )
}

export default App;
