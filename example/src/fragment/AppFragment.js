import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Table, TableHeader, TableBody, TableRow, HeaderCell, TableData, Code, ScrollToTop } from 'react-uix';

const AppFragment = () => {
  return (
    <div>
      <ScrollToTop>
        <Fragment title="App">
          <Paragraph>
            The App component is used to provide initial layout as well as global themeing for your application.
          </Paragraph>
          <PaddedHeading h={6}>Usage</PaddedHeading>
          <Code foregroundColor="#fff" text={`import { App } from "react-uix";`} />
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
                <TableData>children</TableData>
                <TableData>node</TableData>
                <TableData>No</TableData>
                <TableData />
                <TableData>The contents of the App.</TableData>
              </TableRow>
              <TableRow>
                <TableData>theme</TableData>
                <TableData>object</TableData>
                <TableData>No</TableData>
                <TableData />
                <TableData>The theme to be used for the application.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Fragment>
      </ScrollToTop>
    </div>
  );
};

export default AppFragment;
