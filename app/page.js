import Footer from "./components/Footer";
import Aboutus from "./homepage/aboutus";
import Blogs from "./homepage/blog";
import Header from "./homepage/header";
import Herosection from "./homepage/herosection";
import SecondSection from "./homepage/secondsection";

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
  );
}
