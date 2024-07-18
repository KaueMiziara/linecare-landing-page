import About from '../components/about/About';
import Overview from '../components/overview/Overview';
import Courses from '../components/courses/Courses';
import Footer from '../components/footer/Footer';

export default function Home() {
    return (
        <>
            {/* 
                Quem Somos?

                Identidade Organizacional

                Biblioteca

                Cursos -> Página do curso

                Fale Conosco (footer)
            */}

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
