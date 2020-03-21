import React from 'react';

import Fragment from "./Fragment";
import { Example } from "../component";
import { Checkbox, PaddedHeading, Paragraph, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData, ScrollToTop } from "react-uix";

const onChecked = (checked) => {
  alert(`onChecked! Value: ${checked}`);
}

const CheckboxFragment = (props) => {
  return (
    <ScrollToTop>
      <Fragment title="Checkbox">
        <Paragraph>
          The Checkbox component is used to implement a checkbox.
        </Paragraph>
        <Example>
          <Checkbox onChecked={onChecked}>Checkbox</Checkbox>
          <Checkbox onChecked={onChecked}>Another checkbox</Checkbox>
        </Example>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" text={`import { Checkbox } from "react-uix";`} />

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
              <TableData label="Required">No</TableData>
              <TableData label="Default" />
              <TableData label="Description">The text to display alongside the Checkbox.</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    </ScrollToTop>
  );
};

export default CheckboxFragment;
