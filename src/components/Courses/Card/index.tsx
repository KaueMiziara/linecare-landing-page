import React from "react";

interface CardProps {
    cardName: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ cardName, description }) => {
    return (
        <div className="card">
            <p><b>Nome</b>: {cardName}</p>
            <p><b>Descrição</b>: {description}</p>
        </div>
    )
}

export default Card;
