import './Card.css';
import React from 'react';

export default props => {

    const cadStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',        
    }

    return (
        <div className="Card" style={ cadStyle }>
            <div className="Title">{ props.titulo }</div>
            <div className="Content">
                { props.children }
            </div>
        </div>
    )
}