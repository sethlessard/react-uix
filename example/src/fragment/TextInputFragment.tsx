import React from "react";
import Fragment from "./Fragment";
import { Paragraph, TextInput, PaddedHeading, Table, TableBody, TableData, TableHeader, TableRow, HeaderCell, Code, Page } from "@react-uix/web";
import { Example } from "../component";

const USAGE = `
import { TextInput } from "@react-uix/web";

...

/**
 * Called when the TextInput's value is changed.
 * @param {string} value the value of the TextInput.
 */
const onChange = (value) => {
  alert(value);
};

<TextInput
  fontSize="1.25rem"
  onChange={onChange}
  placeholder="placeholder"
/>
`;

const TextInputFragment = () => {
  return (
    <Page>
      <Fragment title="Text Input">
        <Paragraph>The TextInput component can be used to capture text input from a user.</Paragraph>

        <Example>
          <TextInput placeholder="placeholder" />
        </Example>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" code={USAGE} />

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
              <TableData label="Name">fontSize</TableData>
              <TableData label="Type">The font size.</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default">1rem</TableData>
              <TableData label="Description">The font size of the TextInput.</TableData>
            </TableRow>
            <TableRow>
              <TableData label="Name">onChange</TableData>
              <TableData label="Type">(value: string) =&gt; void</TableData>
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
    </Page>
  );
};

export default TextInputFragment;
