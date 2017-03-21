import React, { Component } from 'react';
import { Form, Row, Col, Icon, Input, Button, Card, Modal } from 'react-materialize';


class GetScore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            mark: 0,
            id:0,
            isModalOpen:false
        }
    }    
    componentWillMount () {
        this.setState({
            isModalOpen:this.props.isModalOpen
        });
    }    
    handleChange(e) {
        let targetEle = e.target.id;
        let targetval = e.target.value;
        if (targetEle === "name") {
            this.setState({
                name: targetval
            });
        }
        else if (targetEle === "mark") {
            this.setState({
                mark: targetval
            });
        }
    }
    addScore() {
        let {name,mark,id} = this.state;
        id++;
        let payload={name,mark,id}
        this.props.actions.addScore(payload);
        this.setState({
            name: "",
            mark: 0,
            id
        });
        document.getElementById("name").value = "";
        document.getElementById("mark").value = "";
    }
    render() {
        return (
            <Modal
                trigger={
                    <Button waves='light'>Add New Row</Button>
                }
                actions={
                    <Button waves='light' modal='close' onClick={() => { this.addScore() }}>Submit</Button>
                    }>
                <Card>
                    <Row>
                        <Col s={6}>
                            <Input label="Name" id="name" onChange={(e) => { this.handleChange(e) }} validate><Icon>account_circle</Icon></Input>
                        </Col>
                        <Col s={6}>
                            <Input label="Mark" type="number" id="mark" onChange={(e) => { this.handleChange(e) }} validate type='tel'><Icon>subject</Icon></Input>
                        </Col>                        
                    </Row>
                </Card>
            </Modal>
        )
    }
}

export default GetScore