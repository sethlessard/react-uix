import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader, Heading, Row } from 'react-uix';

class Fragment extends Component {
    state = {
        visible: false,
    };

    componentDidMount() {
        this.setState({ visible: true });
    }

    componentWillUnmount() {
        this.setState({ visible: false });
    }

    render() {
        const { children, style: compStyle, title } = this.props;
        const { visible } = this.state;

        let style = {
            card: {}
        };

        if (visible) {
            style.card.opacity = 1;
            style.card.visibility = "visible";
        }

        Object.assign(style.card, compStyle);
        return (
            <Row>
                <Card style={style.card}>
                    <CardHeader>
                        <Heading h={6}>{ title }</Heading>
                    </CardHeader>
                    <CardBody>
                        {children}
                    </CardBody>
                </Card>
            </Row>
        );
    }
}

Fragment.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
};

export default Fragment;
