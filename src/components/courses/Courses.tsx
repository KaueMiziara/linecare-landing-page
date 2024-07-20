import CourseCard from './card/CouseCard';

export default function Courses() {
    return (
        <div id="cursos">
            <div>
                <CourseCard cardName="AAA" description="BBB"/>
                <CourseCard cardName="BBB" description="CCC"/>
                <CourseCard cardName="CCC" description="DDD"/>
            </div>
        </div>
    )
}
