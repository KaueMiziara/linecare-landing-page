import React from "react";

interface CardProps {
    cardName: string;
    description: string;
}

const CourseCard: React.FC<CardProps> = ({ cardName, description }) => {
    return (
        <div className="card bg-line-secondary">
            <p><b>Nome</b>: {cardName}</p>
            <p><b>Descrição</b>: {description}</p>
        </div>
    )
}

export default CourseCard;
