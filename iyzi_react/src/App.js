import React, {Component,Fragment} from 'react';
import Iframe from 'react-iframe'
import styled from 'styled-components';
import firebase from './Firebase';
//import {participants} from "./Participants";

class App extends Component{

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('participants');
        this.unsubscribe = null;
        this.state = {
            participants: [],
            isInfinity: false,
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const participants = [];
        querySnapshot.forEach((doc) => {
            const {name, url} = doc.data();
            participants.push({
                key: doc.id,
                doc, // DocumentSnapshot
                name,
                url,
            });
        });
        this.setState({
            participants
        });
    };

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }


    render() {
        const { participants }= this.state;
        return (
            <Fragment>
                <ItemList>
                    {participants.map(participant =>
                        <Link href={participant.url}>
                            <Item key={participant.name}>
                                <p>{participant.name}</p>
                                <Iframe url={participant.url}
                                        width="400px"
                                        height="400px"
                                        id={participant.name}
                                        className="myClassname"
                                        display="initial"
                                        position="relative"/>
                            </Item>
                        </Link>
                    )}
                </ItemList>
            </Fragment>
        );
    }
}

const ItemList = styled.div`
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                `;

const Item = styled.div`
                margin-bottom: 10px;
                width: 450px;
                height: 450px;
                margin-top: 20px;
                font-weight: bold;
                font-size: 1em;
                text-align: center;
                `;

const Link = styled.a`
                text-decoration: none;
                color: #282c34;
                `;


export default App;
