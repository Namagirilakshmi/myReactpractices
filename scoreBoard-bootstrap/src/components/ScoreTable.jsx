import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col, Table, Icon, Glyphicon } from 'react-bootstrap';

import "../style.css";

class ScoreTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "arrow-up",
            mark: "arrow-up",
            searchVal: "",
            searchBy: ""
        }
    }
    handleSort(sortField) {
        if (sortField === "name") {
            this.state.name === "arrow-up" ?
                this.setState({
                    name: "arrow-down"
                }) : this.setState({
                    name: "arrow-up"
                });
            let sortType = this.state.name;
            this.props.actions.sortScore({ sortField, sortType });
        } else if (sortField === "mark") {
            this.state.mark === "arrow-up" ?
                this.setState({
                    mark: "arrow-down"
                }) : this.setState({
                    mark: "arrow-up"
                });
            let sortType = this.state.mark;
            this.props.actions.sortScore({ sortField, sortType });

        }
    }

    compare(x, y) {
        var result = true;
        if (x.length != y.length) {
            result = false;
            return result;
        }
        for (var i = 0; i < x.length; i++) {
            for (var propertyName in x[i]) {
                if (x[i][propertyName] !== y[i][propertyName]) {
                    result = false;
                    break;
                }
            }
        }
        return result;
    }

    searchScore(e, searchBy) {
        let searchVal = e.target.value;
        this.setState({
            searchBy, searchVal
        });
    }
    render() {
        let {scores} = this.props;
        var filterBy = this.state.searchVal.toString().toLowerCase();
        let scoreDetails = this.props.scores;
        if (this.state.searchVal.length > 0) {
            scoreDetails = scoreDetails.filter((val) => val[this.state.searchBy].toLowerCase().includes(filterBy));
        }
        let scoreDetailsList = scoreDetails.map((score, i) => {
            return (<tr key={i}>
                <td>{score.name}</td>
                <td>{score.mark}</td>
            </tr>
            );
        });
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Link to="/">Hide Scores</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th data-field="id">Name&nbsp;&nbsp;
                                        <span className="icon" onClick={() => { this.handleSort("name") }}><Glyphicon glyph={this.state.name} /></span>
                                            <input className="browser-default" onChange={(e, searchBy) => { this.searchScore(e, "name") }}></input>
                                        </th>
                                        <th data-field="name">Mark&nbsp;&nbsp;
                                        <span className="icon" onClick={() => { this.handleSort("mark") }}><Glyphicon glyph={this.state.mark} /></span>
                                            <input className="browser-default" onChange={(e, searchBy) => { this.searchScore(e, "mark") }}></input>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scoreDetailsList.length <= 0 ? <tr><td>No Score Details found</td></tr> : scoreDetailsList}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }
}

export default ScoreTable