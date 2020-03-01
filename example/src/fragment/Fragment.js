import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropShadow, Heading, Paper, Row } from 'react-uix';
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

const TitleContainer = styled.div`
  padding: 0 0 .5em 0;
`;

class Fragment extends Component {
  render() {
    const { children, style: compStyle, title } = this.props;

    const style = {
      fragment: {},
      paper: {
        borderRadius: 4,
        padding: "1em"
      }
    };

    Object.assign(style.fragment, compStyle);
    return (
      <Row>
        <Wrapper style={style.fragment}>
          <DropShadow>
            <Paper style={style.paper}>
              <TitleContainer>
                <Heading h={6}>{title}</Heading>
              </TitleContainer>
              {children}
            </Paper>
          </DropShadow>
        </Wrapper>
      </Row>
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
