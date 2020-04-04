import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { PageWrapper } from "@react-uix/styles";

const Wrapper = styled.div`${PageWrapper}`;

const Page = ({ children, style: compStyle }) => {
  const style = {
    Page: {}
  };
  Object.assign(style.Page, compStyle);
  return (
    <Wrapper style={style.Page}>
      {children}
    </Wrapper>
  );
};

Page.propTypes = {};

export default Page;
