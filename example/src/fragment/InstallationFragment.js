import React from 'react';
import Fragment from './Fragment';
import { Code, Grid, Paragraph, ScrollToTop, Spacer } from '@react-uix/web';

const MATERIAL_ICON = `<link href="https://fonts.googleapis.com/ icon?family=Material+Icons" rel="stylesheet" />`;
const ROBOTO = `<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">`;

const InstallationFragment = () => {
  return (
    <div>
      <ScrollToTop>
        <Fragment title="Installation">
          <Paragraph>@react-uix/web is available as an <a href="https://www.npmjs.com/package/@react-uix/web" target="__blank">npm package</a>.</Paragraph>
          <Grid columns={2}>
            <div>
              <Paragraph>npm:</Paragraph>
              <Code foregroundColor="#fff" text="npm install -E @react-uix/web" />
            </div>
            <div>
              <Paragraph>Yarn:</Paragraph>
              <Code foregroundColor="#fff" text="yarn add -E @react-uix/web" />
            </div>
          </Grid>
        </Fragment>
        <Spacer size="2em" />
        <Fragment title="Material Icon Font">
          <Paragraph>In order to use the Material Icon font, you must include this css file in your HTML file:</Paragraph>
          <Code foregroundColor="#fff" text={MATERIAL_ICON} />
        </Fragment>
        <Spacer size="2em" />
        <Fragment title="Roboto Font">
          <Paragraph>It is recommended to use the Roboto font supplied by Google Fonts with @react-uix/web.</Paragraph>
          <Code foregroundColor="#fff" text={ROBOTO} />
        </Fragment>
      </ScrollToTop>
    </div>
  );
};

export default InstallationFragment;
