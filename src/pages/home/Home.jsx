import Feature from "./Feature";
import Footer from "./Footer";
import Header from "../../components/Header";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Feature />
            </main>
            <Footer />
        </div>
    );
}

export default Home; 