import * as React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/components/App.jsx';

describe('./components/App', () => {

    const item = TestUtils.renderIntoDocument(<App />);
    const renderedDOM = () => React.findDOMNode(item);

    it('should render', () => {


        expect(item).toExist();
    });
    it('contains only one children', () => {
        var p = TestUtils.findRenderedDOMComponentWithTag(
            item, 'p'
        );
        expect(p.getDOMNode().textContent)
            .toEqual("App Component");
    })
})