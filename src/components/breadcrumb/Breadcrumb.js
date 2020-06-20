import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "../Icon";

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

/**
* Render the Breadcrumb component.
*/
const Breadcrumb = ({ children, style: compStyle }) => {
  const style = {
    breadcrumb: {

    }
  };
  Object.assign(style.breadcrumb, compStyle);
  return (
    <Wrapper style={style.breadcrumb}>{renderBreadcrumbItems(children)}</Wrapper>
  );
};

const renderBreadcrumbItems = (children) => {
  const newChildren = [];
  let i = 0;
  for (const child of children) {
    newChildren.push(child);
    if (i < children.length - 1) {
      newChildren.push(<Icon size=".75rem" style={{ margin: "0 .5em", padding: "0 0 2px 0" }}>arrow_forward_ios</Icon>)
    }
    i++;
  }
  return newChildren;
};

Breadcrumb.propTypes = {
  children: PropTypes.node
};

export default Breadcrumb;
