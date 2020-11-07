import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Table, TableHeader, TableBody, TableRow, HeaderCell, TableData, Code, ScrollToTop, Page } from '@react-uix/web';

const AppFragment = () => {
  return (
    <Page>
      <ScrollToTop>
        <Fragment title="App">
          <Paragraph>
            The App component is used to provide initial layout as well as global themeing for your application.
          </Paragraph>
          <PaddedHeading h={6}>Usage</PaddedHeading>
          <Code foregroundColor="#fff" code={`import { App } from "@react-uix/web";`} />
          <PaddedHeading h={6}>Props</PaddedHeading>
          <Table>
            <TableHeader>
              <TableRow>
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Type</HeaderCell>
                <HeaderCell>Required</HeaderCell>
                <HeaderCell>Default</HeaderCell>
                <HeaderCell>Description</HeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableData label="Name">children</TableData>
                <TableData label="Type">node</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The contents of the App.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">theme</TableData>
                <TableData label="Type">object</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The theme to be used for the application.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Fragment>
      </ScrollToTop>
    </Page>
  );
};

export default AppFragment;
