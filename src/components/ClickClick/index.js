import React, { Component } from "react";
import Nav from "../Nav";
import Content from "../Content"
import Footer from "../Footer"
import data from "../../data.json"
import Card from "../Card"

class ClickClick extends Component {
    state = {
        data,
        score: 0, 
        topscore: 0

    };
    componentDidMount() {
        this.setState({ data: this.randomizeCards(this.state.data) });
    }

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
    render() {
        return (
            <div>
                <Nav />
                <Content>
                    {this.state.data.map(card => (
                        <Card 
                            key={card.id}
                            id={card.id}
                            image={card.image}
                        />
                    ))}>
                </Content>
                <Footer />
            </div>
        )
    }
}

export default ClickClick;
