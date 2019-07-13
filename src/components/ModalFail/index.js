import React from "react";
import { Modal, ModalBody } from 'reactstrap';
class ModalFail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
    return (
        <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalBody>
                <h4>Not so Yeet</h4>
                <p>
                    A Dupe clicked on a dupe.
                </p>
            </ModalBody>
        </Modal>
        </div>
        );
    }
}

export default ModalFail;