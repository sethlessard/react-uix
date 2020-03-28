import React from "react";
import Fragment from "./Fragment";
import { Paragraph, TextInput, PaddedHeading, Table, TableBody, TableData, TableHeader, TableRow, HeaderCell, Code } from "@react-uix/web";
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
      <Code foregroundColor="#fff" text={`import { TextInput } from "@react-uix/web";`} />

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
            <TableData label="Name">onChange</TableData>
            <TableData label="Type">(value: string) => void</TableData>
            <TableData label="Required">No</TableData>
            <TableData label="Default" />
            <TableData label="Description">The handler function that is called when the value is updated.</TableData>
          </TableRow>
          <TableRow>
            <TableData label="Name">placeholder</TableData>
            <TableData label="Type">string</TableData>
            <TableData label="Required">No</TableData>
            <TableData label="Default" />
            <TableData label="Description">Placeholder text to display when the user has not entered text in the TextInput.</TableData>
          </TableRow>
          <TableRow>
            <TableData label="Name">width</TableData>
            <TableData label="Type">string | number</TableData>
            <TableData label="Required">No</TableData>
            <TableData label="Default" />
            <TableData label="Description">The width of the TextInput.</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default TextInputFragment;
