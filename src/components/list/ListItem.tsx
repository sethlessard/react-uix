import React, { Component } from 'react';
import styled from "styled-components";
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface ListItemProps extends HasChildren, HasStyle { }

const Wrapper = styled.li`
  margin: 0;
`;

class ListItem extends Component<ListItemProps> {

  render() {
    const { children, style: compStyle } = this.props;
    const style = {
      listItem: {}
    };
    Object.assign(style.listItem, compStyle);
    return (
      <Wrapper style={style.listItem}>{children}</Wrapper>
    );
  }
}

export default ListItem;
