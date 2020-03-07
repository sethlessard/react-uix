import React from 'react';
import Fragment from './Fragment';
import { Example } from '../component';
import { Paragraph, Card, Code, PaddedHeading, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData, ScrollToTop } from 'react-uix';

const CardFragment = () => {
  return (
    <ScrollToTop>
      <Fragment title="Card">
        <Paragraph>
          The Card component is used to define an elevated surface.
        </Paragraph>
        <Example>
          <Card z={4} style={{ width: 100, height: 100 }} />
        </Example>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" text={`import { Card } from "react-uix";`} />

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
              <TableData label="Description">The content of the Paper</TableData>
            </TableRow>
            <TableRow>
              <TableData label="Name">style</TableData>
              <TableData label="Type">object</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default" />
              <TableData label="Description">CSS styles for the Paper</TableData>
            </TableRow>
            <TableRow>
              <TableData label="Name">z</TableData>
              <TableData label="Type">number</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default">1</TableData>
              <TableData label="Description">The elevation level of the Card. 1-5 are permissiable options.</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    </ScrollToTop>
  );
};

export default CardFragment;
