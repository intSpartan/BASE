import Header from "../components/header"
import HeroSection from "../components/hero"
import FeaturesSection from "../components/feature.jsx"
import Footer from "../components/contact"
import FaqSection from "../components/FAQs"
import TestimonialSection from "../components/testimonials"



const App = () => {
    return ( 
        <div className='flex flex-col justify-between h-screen'>
            <div className="sticky top-0 z-50">
                <Header/>
            </div>
            <div>
                <HeroSection/>
            </div>
            <div>
                <FeaturesSection/>
            </div>
            {/* <div>
                <TestimonialSection/>
            </div> */}
            <div>
                <FaqSection/>
            </div>
            
            <div>
                <Footer/>
            </div>           
        </div>
        
    )
}

export default App;
    
