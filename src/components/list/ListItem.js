import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.li`
  margin: 0;
`;

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

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

ListItem.propTypes = {
  children: PropTypes.node
};

export default ListItem;
