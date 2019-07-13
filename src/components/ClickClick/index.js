import React, { Component } from "react";
import Nav2 from "../Nav";
import Content from "../Content"
import Footer from "../Footer"
import data from "../../data.json"
import Card from "../Card"
import { Modal, ModalBody } from 'reactstrap';


class ClickClick extends Component {
    state = {
        data,
        score: 0, 
        highscore: 0,
        clicked: [],
        modal: false,
        modal2: false,
        title: "",
        message: ""
    };

    componentDidMount() {
        this.setState({ data: this.randomizeCards(this.state.data) });
    };

    randomizeCards = data => {
        let i = data.length -1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };

    cardClick = id => {
        if (this.state.clicked.includes(id)) {
            this.setState({
                modal: true, score: 0, clicked: [], title: "Not So Yeet", message: "A dupe has been duped"
            })
            
        } else {
            this.setState({
                clicked: this.state.clicked.concat([id]), score: this.state.score + 1
            })
        }
        if (this.state.score > this.state.highscore) {
            this.setState({highscore: this.state.score})
        }
        if (this.state.score === data.length -1) {
            this.setState({
                modal: true, score: 0, clickedArray: [], highcore: 12, title: "Winner Winner", message: "Big Brains Over Here!!!"

            })
        }
        this.setState({ data: this.randomizeCards(this.state.data) });
    };

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    };



    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        return (
            <div>
                <Nav2 score={this.state.score} highscore={this.state.highscore} />
                <Modal 
                    isOpen={this.state.modal} 
                    toggle={this.toggle} 
                    className={this.props.className} 
                    message={this.state.message} 
                    title={this.state.title}>
                    <ModalBody>
                        <h4>{this.state.title}</h4>
                        <p>
                            {this.state.message}
                        </p>
                    </ModalBody>
                </Modal>
                <Content>
                    {this.state.data.map(card => (
                        <Card 
                            key={card.id}
                            id={card.id}
                            image={card.image}
                            cardClick={this.cardClick}
                        />
                    ))}
                </Content>
                <Footer />
            </div>
        )
    }
}

export default ClickClick;
