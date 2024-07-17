import About from '../components/About';
import Overview from '../components/Overview';
import Courses from '../components/Courses';
import Footer from '../components/Footer';

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
