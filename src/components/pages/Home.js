import '../../App.css'
import AboutSection from '../HomePage/AboutSection'
import AuthorSection from '../HomePage/AuthorSection'
import FaqsSection from '../HomePage/FaqsSection'
import HeroSection from '../HomePage/HeroSection'
import NewsLetter from '../HomePage/NewsLetter'
import RecommendedSection from '../HomePage/RecommendedSection'

function Home() {
    return (
        <>
        <HeroSection 
        text="respect the beard"
        />
        <AboutSection />
        <RecommendedSection />
        <AuthorSection />
        <NewsLetter />
        <FaqsSection />
        </>
    )
}

export default Home;