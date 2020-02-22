import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData } from "react-uix";

const RowFragment = () => {
  return (
    <Fragment title="Row">
      <Paragraph>
        The Row component is used to set a minimum and maximum width upon a Surface component, as well as center that component within its parent.
      </Paragraph>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { Row } from "react-uix";`} />

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
            <TableData>node || [node]</TableData>
            <TableData>No</TableData>
            <TableData />
            <TableData>The contents of the Row.</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default RowFragment;
