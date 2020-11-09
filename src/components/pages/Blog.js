import '../../App.css'
import BlogCards from '../HomePage/BlogCards'
import HeroSection from '../HomePage/HeroSection'

function Blog() {
    return (
        <>
        <HeroSection 
        text="blog"
        link="blog"
        />
        <BlogCards />
        </>
    )
}

export default Blog;