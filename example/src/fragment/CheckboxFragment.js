import React from 'react';

import Fragment from "./Fragment";
import { Example } from "../component";
import { Checkbox, PaddedHeading, Paragraph, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData, ScrollToTop, Page } from "@react-uix/web";

const onChecked = (checked) => {
  alert(`onChecked! Value: ${checked}`);
}

const CheckboxFragment = (props) => {
  return (
    <Page>
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
          <Code foregroundColor="#fff" text={`import { Checkbox } from "@react-uix/web";`} />

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
              <TableRow>
                <TableData label="Name">onChecked</TableData>
                <TableData label="Type">(checked: boolean) => void</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The function handler that is called when the checkbox is checked.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Fragment>
      </ScrollToTop>
    </Page>
  );
};

export default CheckboxFragment;
