import React from 'react';
import Fragment from './Fragment';
import { Code, Grid, Paragraph, ScrollToTop } from 'react-uix';

const MATERIAL_ICON = `<link href="https://fonts.googleapis.com/ icon?family=Material+Icons" rel="stylesheet" />`;
const ROBOTO = `<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">`;

const InstallationFragment = () => {
  return (
    <div>
      <ScrollToTop>
        <Fragment title="Installation">
          <Paragraph>react-uix is available as an <a href="https://www.npmjs.com/package/react-uix" target="__blank">npm package</a>.</Paragraph>
          <Grid columns={2}>
            <div>
              <Paragraph>npm:</Paragraph>
              <Code foregroundColor="#fff" text="npm install -E react-uix" />
            </div>
            <div>
              <Paragraph>Yarn:</Paragraph>
              <Code foregroundColor="#fff" text="yarn add -E react-uix" />
            </div>
          </Grid>
        </Fragment>
        <Fragment style={{ margin: "2em 0 0 0" }} title="Material Icon Font">
          <Paragraph>In order to use the Material Icon font, you must include this css file in your HTML file:</Paragraph>
          <Code foregroundColor="#fff" text={MATERIAL_ICON} />
        </Fragment>
        <Fragment style={{ margin: "2em 0 0 0" }} title="Roboto Font">
          <Paragraph>It is recommended to use the Roboto font supplied by Google Fonts with react-uix.</Paragraph>
          <Code foregroundColor="#fff" text={ROBOTO} />
        </Fragment>
      </ScrollToTop>
    </div>
  );
};

export default InstallationFragment;
