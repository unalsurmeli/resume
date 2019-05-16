import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment().format('LLLL')
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            //time: new Date().toLocaleString()
            date: moment().format('LLLL')
        });
    }
    render() {
        return (
            <div style={styles.dateStyle}>
                <div style={styles.subDivStyle}>
                    <h1 style={{...styles.P, order: 1}}>{this.state.date}</h1>
                </div>
            </div>
        );
    }
}

//<h1 style={{...styles.P, order: 1}}>{moment().format('LT')}</h1>
//<h1 style={{...styles.P, order: 1}}>{moment().format('dddd')}  {moment().format('L')}</h1>

const styles = {
    P: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '100%',
        fontFamily: 'comfortaa',
        textAlign: 'center',
        textShadow: '1px 1px 1px #000',
        letterSpacing: '1px',
    },
    subDivStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column wrap',
    },
    dateStyle: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        margin: '.5rem 1rem',
    }
};

export default Clock;