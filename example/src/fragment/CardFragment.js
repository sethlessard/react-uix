import React from 'react';
import Fragment from './Fragment';
import { Example } from '../component';
import { Paragraph, Card, Code, PaddedHeading, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData } from 'react-uix';

const CardFragment = () => {
  return (
    <Fragment title="Card">
      <Paragraph>
        The Card component is used to define an elevated surface.
      </Paragraph>
      <Example>
        <Card z={4} style={{ width: 100, height: 100 }} />
      </Example>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { Card } from "react-ui";`} />

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
            <TableData>The content of the Paper</TableData>
          </TableRow>
          <TableRow>
            <TableData>style</TableData>
            <TableData>object</TableData>
            <TableData>No</TableData>
            <TableData />
            <TableData>CSS styles for the Paper</TableData>
          </TableRow>
          <TableRow>
            <TableData>z</TableData>
            <TableData>number</TableData>
            <TableData>No</TableData>
            <TableData>1</TableData>
            <TableData>The elevation level of the Card. 1-5 are permissiable options.</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
}

export default CardFragment;
