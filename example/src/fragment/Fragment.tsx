import React, { Component } from 'react';
import { DropShadow, HasChildren, HasStyle, Heading, Paper, Row } from '@react-uix/web';
import styled from "styled-components";

export interface FragmentProps extends HasChildren, HasStyle {
  title?: string;
}

const Wrapper = styled.div`
`;

const TitleContainer = styled.div`
  padding: 0 0 .5em 0;
`;

class Fragment extends Component<FragmentProps> {
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

export default Fragment;
