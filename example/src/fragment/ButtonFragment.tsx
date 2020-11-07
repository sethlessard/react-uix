import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Button, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData, ScrollToTop, Page } from '@react-uix/web';
import { Example } from '../component';

const ButtonFragment = () => {
  return (
    <Page>
      <ScrollToTop>
        <Fragment title="Button">
          <Paragraph>
            Button
          </Paragraph>
          <Example>
            <Button>Button</Button>
          </Example>
          <Example>
            <Button backgroundColor="#000000">Dark Button</Button>
          </Example>

          <PaddedHeading h={6}>Usage</PaddedHeading>
          <Code foregroundColor="#fff" code={`import { Button } from "@react-uix/web";`} />

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
                <TableData label="Name">backgroundColor</TableData>
                <TableData label="Type">string</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The background color.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">children</TableData>
                <TableData label="Type">string</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The text of the Button.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">foregroundColor</TableData>
                <TableData label="Type">string</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The text color.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Fragment>
      </ScrollToTop>
    </Page>
  );
};

export default ButtonFragment;
