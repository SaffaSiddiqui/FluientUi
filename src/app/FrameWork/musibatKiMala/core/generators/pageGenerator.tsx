import React from 'react';
import { elements } from '../base/elemets';

export const pageGenerator = (element : elements[]) => {
    return(
        <>
            {element.map((el, i) => (
                <div key={i}>{el.renderElement()}</div>
            ))}
        </>
    );
}