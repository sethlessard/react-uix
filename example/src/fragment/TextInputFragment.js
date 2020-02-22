import React from "react";
import Fragment from "./Fragment";
import { Paragraph, TextInput, PaddedHeading, Table, TableBody, TableHeader, TableRow, HeaderCell, Code } from "react-uix";
import { Example } from "../component";

const TextInputFragment = ({ style: compStyle }) => {
  const style = {
    TextInputFragment: {}
  };
  Object.assign(style.TextInputFragment, compStyle);
  return (
    <Fragment title="Text Input">
      <Paragraph>The TextInput component can be used to capture text input from a user.</Paragraph>

      <Example>
        <TextInput placeholder="placeholder" />
      </Example>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { TextInput } from "react-uix";`} />

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
            {/* <TableData>children</TableData>
                  <TableData>string</TableData>
                  <TableData>No</TableData>
                  <TableData />
                  <TableData>The text.</TableData> */}
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default TextInputFragment;
