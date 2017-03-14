import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Row, Col, Panel} from "react-bootstrap";

@connect(
  (state) => ({
    dinosaurs: state.dinosaurReducer.dinosaurs,
    dinosaursData: state.dinosaurReducer.dinosaursData
  })
)
export default class Dinosaur extends Component {
  static get propTypes() {
    return {
      dinosaursData: PropTypes.object.isRequired
    };
  }
  render() {
    const {params: {id: name}, dinosaurs, dinosaursData} = this.props;
    if (dinosaurs.length) {
      const dino = dinosaursData[name];
      return (
        <Row>
          <Col md={ 6 } sm={ 8 } xs={ 12 } className="col-centered">
            <Panel className="capitalize" header={ name }>
              <ul>
                <li>Order: {dino.order}</li>
                <li>Appeared: {dino.appeared}</li>
                <li>Vanished: {dino.vanished}</li>
                <li>Height: {dino.height}</li>
                <li>Weight: {dino.weight}</li>
                <li>Length: {dino.length}</li>
              </ul>
            </Panel>
          </Col>
        </Row>
      )
    } else {
      return (
        <div>loading...</div>
      );
    }
  }
}
