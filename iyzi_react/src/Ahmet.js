import React, {Component} from 'react';
import {colors} from "./Colors";

class Ahmet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
            divColor: 'tomato'
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
            time: new Date().toLocaleTimeString(),
            divColor: this.getRandomColor()
        });
    }

    getRandomColor(){
        return colors[Math.floor(Math.random() * colors.length)];
    }

    render() {
        const { firstDivStyle } = styles;
        return (
            <div style={{...firstDivStyle, backgroundColor: this.state.divColor}}>
                <h1>iyziReact Sezon 1 Bolum 1</h1>
                <h2>{new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}

const styles= {
    firstDivStyle: {
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
};


export default Ahmet;