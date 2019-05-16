import React from 'react';
import { upperFirst } from 'lodash/fp';

const getDailyMessage = () => {
    const hour = new Date().getHours();

    const messages = {
        0: 'Good Night',
        1: 'Good Morning',
        2: 'Good Afternoon',
        3: 'Good Evening',
        4: 'Good Night',
    };

    const dayRatio = 24 / 4;
    return messages[Math.floor(hour / dayRatio)];
};

const DailyText = ({ name }) => {
    const message = getDailyMessage();
    return (
        <p style={styles.text}>{message}, {upperFirst(name)}</p>
    );
};

const styles = {
    text: {
        textAlign: 'center',
        fontFamily: 'comfortaa',
        fontSize: '200%',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '1px 1px 1px #000',
    },
};

export default DailyText;

