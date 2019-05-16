import React from 'react';

export const Greetings = (props) => {
    return (
        <h1 style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '500%',
            textAlign: 'center',
            fontFamily: 'comfortaa',
            textShadow: '1px 1px 1px #000',
        }}>
            I'm {props.name} {props.surname}.
        </h1>
    );
};
