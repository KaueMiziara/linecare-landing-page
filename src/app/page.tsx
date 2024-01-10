import About from '../components/About';
import Overview from '../components/Overview';
import Courses from '../components/Courses';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <h1>Line Care</h1>
        
            <hr />
            <Overview />
            
            <hr />
            <About />
        
            <Courses />
        
            <Footer />
        </>
    )
}
