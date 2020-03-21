import React from 'react';

import {
  PaddedHeading, Paragraph, TextArea, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData
} from "@react-uix/web";
import Fragment from "./Fragment";
import { Example } from "../component";

const TextAreaFragment = (props) => {
  return (
    <Fragment title="Text Area">
      <Paragraph>
        The TextArea component is used to implement a multi-line text input field.
      </Paragraph>
      <Example>
        <TextArea>This is an example TextArea. You can edit this text.</TextArea>
      </Example>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { TextArea } from "@react-uix/web";`} />

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
            <TableData label="Required">Yes</TableData>
            <TableData label="Default" />
            <TableData label="Description">The placeholder for the TextArea.</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default TextAreaFragment;
