import React, {Component, Fragment} from 'react';

import {Greetings} from "./components/Greetings";
import Clock from "./components/Clock";
import DailyText from "./components/DailyText";

import Header from './container/Header';
import Footer from './container/Footer';

import wallpaper from './assets/images/wallpaper.jpg'

class App extends Component {
    state = {
        backgroundImageUrl: wallpaper
    };

    render() {
        const { backgroundImageUrl } = this.state;

        return (
          <Fragment>
            <Header />
            <div style={{...styles.backStyle, backgroundImage: `url(${backgroundImageUrl})`}}>
                <div style={styles.wrapperStyle}>
                    <div style={styles.contentStyle}>
                        <Greetings name="Ünal" surname="Sürmeli" />
                    </div>
                    <DailyText name="Ünal" />
                    <Clock />
                </div>
            </div>
            <Footer />
          </Fragment>
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
