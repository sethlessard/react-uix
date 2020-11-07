import React from 'react';
import Fragment from './Fragment';
import { Heading, Paragraph, Code, Table, TableHeader, TableRow, TableBody, TableData, HeaderCell, Page } from '@react-uix/web';
import { Example } from "../component";

const HeadingFragment = () => {
  return (
    <Page>
      <Fragment title="Heading">
        <Paragraph>
          The Heading component is used to implement a Heading. The size of the heading can be changed with the 'h' property.
        </Paragraph>
        <Example>
          <Heading h={1}>Heading 1</Heading>
        </Example>
        <Example>
          <Heading h={2}>Heading 2</Heading>
        </Example>
        <Example>
          <Heading h={3}>Heading 3</Heading>
        </Example>
        <Example>
          <Heading h={4}>Heading 4</Heading>
        </Example>
        <Example>
          <Heading h={5}>Heading 5</Heading>
        </Example>
        <Example>
          <Heading h={6}>Heading 6</Heading>
        </Example>

        <Heading h={6}>Usage</Heading>
        <Code foregroundColor="#fff" code={`import { Heading } from "@react-uix/web";`} />

        <Heading h={6}>Props</Heading>
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
              <TableData label="Description">The contents of the Heading.</TableData>
            </TableRow>
            <TableRow>
              <TableData label="Name">h</TableData>
              <TableData label="Type">number</TableData>
              <TableData label="Required">Yes</TableData>
              <TableData label="Default" />
              <TableData label="Description">The Heading level.</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    </Page>
  );
};

export default HeadingFragment;
