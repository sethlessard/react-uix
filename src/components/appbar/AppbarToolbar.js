import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 2em 0 0;
  display: inline-flex;
`;

const AppbarToolbar = (props) => {
  const style = {
    toolbar: {}
  };

  return (
    <Wrapper style={style.toolbar}>
      {props.children}
    </Wrapper>
  );
};

AppbarToolbar.propTypes = {
  children: PropTypes.object
};

export default AppbarToolbar;
