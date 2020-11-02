import React from "react";
import styled, { CSSProperties } from "styled-components";

import Icon from "../Icon";

export interface BreadcrumbProps {
  children: React.ReactNode[];
  style?: CSSProperties;
};

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

/**
* Render the Breadcrumb component.
*/
const Breadcrumb = ({ children, style: compStyle }: BreadcrumbProps) => {
  const style = {
    breadcrumb: {

    }
  };
  Object.assign(style.breadcrumb, compStyle);
  return (
    <Wrapper style={style.breadcrumb}>{renderBreadcrumbItems(children)}</Wrapper>
  );
};

const renderBreadcrumbItems = (children: React.ReactNode[]) => {
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

export default Breadcrumb;
