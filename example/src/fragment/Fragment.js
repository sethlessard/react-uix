import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader, Heading, Row } from 'react-uix';
import styled from "styled-components";

const Wrapper = styled.div`
  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
      from {
          opacity: 0;
          -webkit-opacity: 0;
          visibility: hidden;
      }
      to {
          opacity: 1;
          -webkit-opacity: 1;
          visibility: visible;
      }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  -webkit-animation-name: fadein;
  -webkit-animation-duration: .4s;
  -webkit-animation-timing-function: ease-out;
  -webkit-animation-iteration-count: 1;
  -moz-animation: fadein .4s ease-out;
  -ms-animation: fadein .4s ease-out;
  -o-animation: fadein .4s ease-out;
  animation: fadein .4s ease-out;
`;

class Fragment extends Component {
  render() {
    const { children, style: compStyle, title } = this.props;

    const style = {
      card: {
        flex: 1
      }
    };

    Object.assign(style.card, compStyle);
    return (
      <Wrapper>
        <Row>
          <Card style={style.card}>
            <CardHeader>
              <Heading h={6}>{title}</Heading>
            </CardHeader>
            <CardBody>
              {children}
            </CardBody>
          </Card>
        </Row>
      </Wrapper>
    );
  }
}

Fragment.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Fragment;
