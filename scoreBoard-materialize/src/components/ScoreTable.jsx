import React, { Component } from 'react';
import { Link } from 'react-router';

import { Row, Col, Table, Icon, Input, Button } from 'react-materialize';

import "../style.css";

class ScoreTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "arrow_upward",
            mark: "arrow_upward",
            searchVal: "",
            searchBy: ""
        }
    }
    handleSort(sortField) {
        if (sortField === "name") {
            this.state.name === "arrow_upward" ?
                this.setState({
                    name: "arrow_downward"
                }) : this.setState({
                    name: "arrow_upward"
                });
            let sortType = this.state.name;
            this.props.actions.sortScore({ sortField, sortType });
        } else if (sortField === "mark") {
            this.state.mark === "arrow_upward" ?
                this.setState({
                    mark: "arrow_downward"
                }) : this.setState({
                    mark: "arrow_upward"
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
    deleteScore(e,id){
        this.props.actions.deleteScore({id});
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
                <td><Button onClick={(e)=>{this.deleteScore(e,score.id)}}>Delete</Button></td>
            </tr>
            );
        });
        return (
            <div>
                <Row>
                    <Col s={12}>
                        <Link to="/">
                            <Button waves="light">Hide Scores</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col s={6}>
                        <Table>
                            <thead>
                                <tr>
                                    <th data-field="id">Name&nbsp;&nbsp;
                                        <span className="icon" onClick={() => { this.handleSort("name") }}><Icon>{this.state.name}</Icon></span>
                                        <input className="browser-default search-name" onChange={(e, searchBy) => { this.searchScore(e, "name") }}></input>
                                    </th>
                                    <th data-field="name">Mark&nbsp;&nbsp;
                                        <span className="icon" onClick={() => { this.handleSort("mark") }}><Icon>{this.state.mark}</Icon></span>
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
            </div>
        )
    }
}

export default ScoreTable