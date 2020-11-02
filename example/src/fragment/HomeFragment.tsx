import React from 'react';

import {
  Paragraph,
  Page
} from "@react-uix/web";
import Fragment from "./Fragment";

const HomeFragment = (props) => {
  return (
    <Page>
      <Fragment title="React UiX">
        <Paragraph>
          UiX is a <a href="https://reactjs.org/" target="__blank">React</a> component library. It is designed with both desktop and mobile landscapes in mind.
          The source code for UiX can be found <a href="https://github.com/sethlessard/@react-uix/web" target="__blank">here.</a>
        </Paragraph>
      </Fragment>
    </Page>
  );
};

export default HomeFragment;
