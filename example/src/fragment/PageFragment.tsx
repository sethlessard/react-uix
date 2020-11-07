import React from "react";
import { Page, Paragraph, PaddedHeading, Code, Table, TableRow, TableHeader, TableBody, TableData, HeaderCell } from "@react-uix/web";
import Fragment from "./Fragment";

const USAGE = `
import { Page } from "@react-uix/web";

...

<Page>
  ...
</Page>
`;

const PageFragment = () => {
  return (
    <Page>
      <Fragment title="Page">
        <Paragraph>The Page component can be used to define a Page within an Application.</Paragraph>
        <Paragraph>A Page object brings animations to the UI when the page is loaded/unloaded.</Paragraph>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code code={USAGE} />

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
              <TableData label="Type">node</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default" />
              <TableData label="Description">The contents of the Page.</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    </Page>
  );
};

PageFragment.propTypes = {};

export default PageFragment;
