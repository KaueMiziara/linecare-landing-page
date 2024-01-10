import Card from './Card';
import './style.css';

export default function Courses() {
    return (
        <div id="cursos" className="courses-section-container">
            <div className="courses-container">
                <Card cardName="AAA" description="BBB"/>
                <Card cardName="BBB" description="CCC"/>
                <Card cardName="CCC" description="DDD"/>
            </div>
        </div>
    )
}
