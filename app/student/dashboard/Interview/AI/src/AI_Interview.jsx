import Header from "./components/header.jsx"
import HeroSection from "./components/hero.jsx"
import FeaturesSection from "./components/feature.jsx"
import Footer from "../../../../../components/Footer.jsx"
import FaqSection from "./components/FAQs.jsx"
import TestimonialSection from "./components/testimonials.jsx"



const App = () => {
    return ( 
        <div className='flex flex-col justify-between h-screen'>
            {/* <div className="sticky top-0 z-50">
                <Header/>
            </div> */}
            {/* <div>
                <HeroSection/>
            </div> */}
            <div>
                <FeaturesSection/>
            </div>
            {/* <div>
                <TestimonialSection/>
            </div> */}
            {/* <div>
                <FaqSection/>
            </div>
             */}
            {/* <div>
                <Footer/>
            </div>            */}
        </div>
        
    )
}

export default App;
    
