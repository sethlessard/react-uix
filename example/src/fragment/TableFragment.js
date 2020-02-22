import React from 'react';

import Fragment from "./Fragment";
import { PaddedHeading, Table, TableHeader, TableBody, TableRow, HeaderCell, TableData, Paragraph, Code, List, ListItem } from "react-uix";
import { Example } from "../component";

const TableFragment = (props) => {
  return (
    <Fragment title="Table">
      <Paragraph>The Table component can be used to populate a table.</Paragraph>
      <Example>
        <Table>
          <TableHeader>
            <TableRow>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Age</HeaderCell>
              <HeaderCell>Height</HeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableData>Seth</TableData>
              <TableData>3600</TableData>
              <TableData>5999</TableData>
            </TableRow>
            <TableRow>
              <TableData>Seth</TableData>
              <TableData>3600</TableData>
              <TableData>5999</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Example>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { Table } from "react-uix";`} />

      <PaddedHeading h={6}>Props</PaddedHeading>
      <Table>
        <TableHeader>
          <TableRow>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Type</HeaderCell>
            <HeaderCell>Default</HeaderCell>
            <HeaderCell>Description</HeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableData>children</TableData>
            <TableData>node</TableData>
            <TableData />
            <TableData>The contents of the Table. See Direct Subcomponents below.</TableData>
          </TableRow>
          <TableRow>
            <TableData>style</TableData>
            <TableData>object</TableData>
            <TableData />
            <TableData>CSS styles for the Table</TableData>
          </TableRow>
        </TableBody>
      </Table>

      <PaddedHeading h={6}>Direct Subcomponents</PaddedHeading>
      <Paragraph>The Table component has the following direct subcomponents:</Paragraph>
      <List>
        <ListItem>TableHeader</ListItem>
        <ListItem>TableBody</ListItem>
      </List>
    </Fragment>
  );
};

export default TableFragment;
