import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropShadow, Heading, Paper, Row } from '@react-uix/web';
import styled from "styled-components";

const Wrapper = styled.div`
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
  children?:PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Fragment;
