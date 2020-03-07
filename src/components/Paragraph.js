import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { connect } from "react-redux";
import styled from "styled-components";

const mapStateToProps = (state, ownProps) => ({
  color: ownProps.color || state.ui.foregroundColor
});

const Wrapper = styled.div`
  padding: .5em 0;
`;

const Paragraph = ({ children, color, fontSize, fontWeight, style: compStyle }) => {
  const style = {
    Paragraph: {}
  };
  Object.assign(style.Paragraph, compStyle);
  return (
    <Wrapper className="Paragraph" style={style.Paragraph}>
      <Text
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {children}
      </Text>
    </Wrapper>
  );
};

Paragraph.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string
};

export default connect(mapStateToProps)(Paragraph);
