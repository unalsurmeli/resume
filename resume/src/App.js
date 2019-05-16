import React, {Component} from 'react';
import {Greetings} from "./components/Greetings";
import Clock from "./components/Clock";
import DailyText from "./components/DailyText";

class App extends Component {
    state = {
        backgroundImageUrl: 'https://source.unsplash.com/random/1600x900/?architecture,nature,water'
        //backgroundImageUrl: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec'
        //backgroundImageUrl: 'https://source.unsplash.com/collection/2013126/1600x900'
    };

    render() {
        const {backgroundImageUrl} = this.state;

        return (
            <div style={{...styles.backStyle, backgroundImage: `url(${backgroundImageUrl})`}}>
                <div style={styles.wrapperStyle}>
                    <div style={styles.contentStyle}>
                        <Greetings name={'Ünal'} surname={'Sürmeli'}/>
                    </div>
                    <DailyText name={'Ünal'} />
                    <Clock />
                </div>
            </div>
        );
    }
}

const styles = {

    backStyle: {
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperStyle: {
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1 0 auto',
    }
};

export default App;
