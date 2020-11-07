import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { connect } from "react-redux";
import styled from "styled-components";
import HasChildren from "../types/HasChildren";
import HasStyle from "../types/HasStyle";
import Styleable from "../types/Styleable";
import { UIState } from "../redux/reducers/ui";

export interface ParagraphProps extends HasChildren, HasStyle, Styleable {
  fontSize: string;
  fontWeight: string;
}

const mapStateToProps = (state: { ui: UIState }, ownProps: ParagraphProps) => ({
  // TODO: calculate color based on background
  foregroundColor: ownProps.foregroundColor || state.ui.theme.text.colorOnLight
});

const Wrapper = styled.div`
  padding: .5em 0;
`;

const Paragraph = ({ children, foregroundColor, fontSize, fontWeight, style: compStyle }: ParagraphProps) => {
  const style = {
    Paragraph: {}
  };
  Object.assign(style.Paragraph, compStyle);
  return (
    <Wrapper style={style.Paragraph}>
      <Text
        foregroundColor={foregroundColor}
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
