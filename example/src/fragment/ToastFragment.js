import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData } from 'react-uix';

const ToastFragment = (props) => {
  return (
    <Fragment title="toast">
      <Paragraph>
        The Toast component is used to display a toast-type notification to the user.
      </Paragraph>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { Toast } from "react-uix";`} />

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
            <TableData>string</TableData>
            <TableData>No</TableData>
            <TableData />
            <TableData>The text.</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
}

export default ToastFragment;
