import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData, Page } from '@react-uix/web';

const ParagraphFragment = () => {
  return (
    <Page>
      <Fragment title="Paragraph">
        <Paragraph>
          The Paragraph component is used to implement a Paragraph.
        </Paragraph>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" code={`import { Paragraph } from "@react-uix/web";`} />

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
              <TableData label="Description">The contents of the Paragraph.</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    </Page>
  );
};

export default ParagraphFragment;
