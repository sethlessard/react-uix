import React from 'react';
import Fragment from './Fragment';
import {
  Code,
  PaddedHeading,
  Paragraph,
  Paper,
  Table,
  TableHeader,
  TableRow,
  HeaderCell,
  TableBody,
  TableData
} from '@react-uix/web';
import { Example } from "../component";

const PaperFragment = () => {
  return (
    <Fragment title="Paper">
      <Paragraph>
        The Paper component is used to define a surface.
      </Paragraph>
      <Example>
        <Paper style={{ width: 100, height: 100 }} />
      </Example>

      <PaddedHeading h={4}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { Paper } from "@react-uix/web";`} />

      <PaddedHeading h={4}>Props</PaddedHeading>
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
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default PaperFragment;
