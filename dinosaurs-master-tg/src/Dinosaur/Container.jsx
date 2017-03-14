import React, {Component} from "react";
import {Link, browserHistory} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {findDOMNode} from "react-dom";
import {Grid, Row, Col, Navbar, Nav, Alert, Glyphicon} from "react-bootstrap";
import * as dinosaurActions from "./Actions";
import Spinner from "../Spinner.jsx";
require("./style.css");

@connect(
  (state) => ({
    dinosaurs: state.dinosaurReducer.dinosaurs,
    fetchError: state.dinosaurReducer.fetchError
  }),
  (dispatch) => ({
    actions: bindActionCreators(dinosaurActions, dispatch)
  })
)
export default class DinosaurContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    this.props.actions.fetchDinosaurFromAPI();
  }
  toggleClass = (elem, toggleClass) => {
    let classes = elem.className;
    const pattern = new RegExp(toggleClass);
    classes = pattern.test(classes) ?
      classes.replace(pattern, "") : `${classes} ${toggleClass}`;
    elem.className = classes.trim();
  }
  navbarToggle = () => {
    const navbarNavElem = findDOMNode(this.refs.navbarNavRef);
    const sideBodyElem = findDOMNode(this.refs.sideBodyRef);
    this.toggleClass(navbarNavElem, "slide-in");
    this.toggleClass(sideBodyElem, "body-slide-in");
  }
  getAPIErrorTemplate = (errMsg) => {
    return (
      <Grid>
        <Row>
          <Col xs={ 12 }>
            <Alert bsStyle="danger">
              <p>
                <strong>API Fetch Error: </strong>
                <span>{errMsg}</span>
              </p>
            </Alert>
          </Col>
        </Row>
      </Grid>
    );
  }
  render() {
    const {dinosaurs, fetchError, children} = this.props;
    const menu_items = dinosaurs.map((dino, key) => {
      return (
        <li key={ key } role="presentation">
          <Link
            className="capitalize"
            to={ dino }
            activeClassName="active"
          >
            {dino}
            <Glyphicon glyph="chevron-right pull-right small-glyph" />
          </Link>
        </li>
      );
    });
    if (fetchError.length > 0) {
      return this.getAPIErrorTemplate(fetchError);
    }
    if(!dinosaurs.length) {
      return (
        <Grid>
          <Row>
            <Col xs={ 12 } className="text-center spaced">
              <div><Spinner /></div>
            </Col>
          </Row>
        </Grid>
      )
    }
    return (
      <Grid fluid>
        <Row>
          <Col xs={ 12 } className="header-menu">
            <Navbar.Header>
              <Navbar.Toggle onClick={ this.navbarToggle } />
              <Navbar.Brand>
                <Link to="/">
                  List of Dinosaurs
                </Link>
              </Navbar.Brand>
            </Navbar.Header>
          </Col>
        </Row>
        <Row>
          <div className="side-menu">
            <Nav ref="navbarNavRef">
              {menu_items}
            </Nav>
          </div>
        </Row>
        <Row>
          <div ref="sideBodyRef" className="side-body">
            <Grid fluid>
              <Row>
                <Col xs={ 12 } className="spaced">
                  {children}
                </Col>
              </Row>
            </Grid>
          </div>
        </Row>
      </Grid>
    );
  }
}
