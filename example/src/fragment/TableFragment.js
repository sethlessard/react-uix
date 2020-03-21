import React from 'react';

import Fragment from "./Fragment";
import { PaddedHeading, Table, TableHeader, TableBody, TableRow, HeaderCell, TableData, Paragraph, Code, List, ListItem, Text } from "@react-uix/web";
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
              <TableData label="Name">Seth</TableData>
              <TableData label="Age">3600</TableData>
              <TableData label="Height">5999</TableData>
            </TableRow>
            <TableRow>
              <TableData label="Name">Seth</TableData>
              <TableData label="Age">3600</TableData>
              <TableData label="Height">5999</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Example>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { Table } from "@react-uix/web";`} />

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
            <TableData label="Name">children</TableData>
            <TableData label="Type">node</TableData>
            <TableData label="Default" />
            <TableData label="Description">The contents of the Table. See Child Components below.</TableData>
          </TableRow>
          <TableRow>
            <TableData label="Name">style</TableData>
            <TableData label="Type">object</TableData>
            <TableData label="Default" />
            <TableData label="Description">CSS styles for the Table</TableData>
          </TableRow>
        </TableBody>
      </Table>

      <PaddedHeading h={6}>Child Components</PaddedHeading>
      <Paragraph>The Table component has the following child components:</Paragraph>
      <List>
        <ListItem><Text fontSize=".7rem">TableHeader</Text></ListItem>
        <ListItem><Text fontSize=".7rem">TableBody</Text></ListItem>
      </List>
    </Fragment>
  );
};

export default TableFragment;
