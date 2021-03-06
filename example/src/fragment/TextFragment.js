import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Text, Code, Table, TableHeader, TableRow, TableBody, TableData, HeaderCell, Page } from '@react-uix/web';
import { Example } from '../component';

const TextFragment = (props) => {
  return (
    <Page>
      <Fragment title="Text">
        <Paragraph>
          The Text component is used to implement text.
        </Paragraph>
        <Example>
          <Text>This is an example of some text</Text>
        </Example>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" text={`import { Text } from "@react-uix/web";`} />

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
              <TableData label="Type">string</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default" />
              <TableData label="Description">The text.</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    </Page>
  );
};

export default TextFragment;
