import React, { Component } from 'react';

import { Link } from 'react-router';

import { Card, Row, Col, Input, Icon, Button } from 'react-materialize';

import GetScore from './GetScore.jsx';
import Scoretable from './ScoreTable.jsx';

class Score extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={6} offset="s3">
                        <Card className="transparent z-depth-5">
                            <Row>
                                <Col s={6}>
                                    <GetScore actions={this.props.actions} />
                                </Col>
                                <Col s={6}>
                                    {this.props.params.viewScore == "0" ? null :
                                        <Link to="/score/0">
                                            <Button waves='light'>View scores</Button>
                                        </Link>
                                    }
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col s={6} offset="s3">
                        {this.props.params.viewScore == "1" ? null :
                            <Scoretable actions={this.props.actions} scores={this.props.scores} />
                        }
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Score