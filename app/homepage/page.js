import Footer from "../components/Footer";
import Aboutus from "./aboutus";
import Blogs from "./blog";
import Header from "./header";
import Herosection from "./herosection";
import SecondSection from "./secondsection";
export default function Homepage() {
    return (

        <>
            <Header />
            <Herosection />
            <SecondSection />
            <Aboutus />
            <Blogs />
            <Footer />
        </>

    )
}