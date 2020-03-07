import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Text, Code, Table, TableHeader, TableRow, TableBody, TableData, HeaderCell } from 'react-uix';
import { Example } from '../component';

const TextFragment = (props) => {
  return (
    <Fragment title="Text">
      <Paragraph>
        The Text component is used to implement text.
      </Paragraph>
      <Example>
        <Text>This is an example of some text</Text>
      </Example>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { Text } from "react-uix";`} />

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
            <TableData />
            <TableData label="Description">The text.</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default TextFragment;
