import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import HasChildren from "../types/HasChildren";
import HasStyle from "../types/HasStyle";

export interface PageProps extends HasChildren, HasStyle {

}

const Wrapper = styled.div`
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
        opacity: 0;
        -webkit-opacity: 0;
        visibility: hidden;
    }
    to {
        opacity: 1;
        -webkit-opacity: 1;
        visibility: visible;
    }
  }
  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  -webkit-animation-name: fadein;
  -webkit-animation-duration: .4s;
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  -moz-animation: fadein .4s ease-in-out;
  -ms-animation: fadein .4s ease-in-out;
  -o-animation: fadein .4s ease-in-out;
  animation: fadein .4s ease-in-out;
`;

const Page = ({ children, style: compStyle }: PageProps) => {
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

export default Page;
