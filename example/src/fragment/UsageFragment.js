import React from 'react';
import { Paragraph, Code, ScrollToTop, Spacer } from 'react-uix';
import Fragment from './Fragment';

const EXAMPLE = `
import React, { Component } from "react";
import { App, Appbar, AppContent, AppTitle, AppTitleContainer, Button } from "react-uix";

const Example = () => {
  return (
    <App>
      <Appbar>
        <AppTitleContainer>
          <AppTitle>App</AppTitle>
        </AppTitleContainer>
      </Appbar>
      <AppContent>
        <Button onClick={() => alert("Button Clicked!")}>Button</Button>
      </AppContent>
    </App>
  );
};

export default Example;
`;

const THEMEING_EXAMPLE = `
const theme = {
  colorPrimary: "#2c3e50",
  colorSecondary: "#000000",
  text: {
    colorOnLight: "#111",
    colorOnDark: "#fff"
  }
};

<App theme={theme}>
\t...
</App>
`;

const UsageFragment = () => {
  return (
    <div>
      <ScrollToTop>
        <Fragment title="Getting Started">
          <Code foregroundColor="#fff" text={`import { App } from "react-uix";`} />
          <Paragraph>
            All UiX components can work in isolation. All components can be styled with 'backgroundColor' and 'foregroundColor' properties.
          </Paragraph>
          <Code foregroundColor="#fff" text={EXAMPLE} />
        </Fragment>
        <Spacer size="2em" />
        <Fragment title="Themeing">
          <Paragraph>
            In order to theme your application, you must wrap it with an App component. You can describe your application's primary color using
            the 'primaryColor' prop of the App component. You can also describe the secondary and foreground colors for your application using
            the 'secondaryColor' and 'foregroundColor' props of the App component.
          </Paragraph>
          <Code foregroundColor="#fff" text={THEMEING_EXAMPLE} />
          <Paragraph>
            By default, all UiX components will follow the theme described in the App component. If one is not described in the App component,
            or if an App component is not defined, then it is best if the developer uses the coloring properties for each individual component.
          </Paragraph>
        </Fragment>
      </ScrollToTop>
    </div>
  );
};

export default UsageFragment;
