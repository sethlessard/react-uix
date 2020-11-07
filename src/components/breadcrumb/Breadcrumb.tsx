import React from "react";
import styled from "styled-components";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";
import ReactChildren from "../../types/ReactChildren";

import Icon from "../Icon";

export interface BreadcrumbProps extends HasChildren, HasStyle { }

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

const renderBreadcrumbItems = (children: ReactChildren) => {
  if (!children) return [];
  const newChildren = [];
  let i = 0;
  if (typeof children === "string") return children;

  // @ts-ignore
  for (const child in children) {
    newChildren.push(child);
      // @ts-ignore
    if (i < children.length - 1) {
      newChildren.push(<Icon size=".75rem" style={{ margin: "0 .5em", padding: "0 0 2px 0" }}>arrow_forward_ios</Icon>)
    }
    i++;
  }
  return newChildren;
};

export default Breadcrumb;
