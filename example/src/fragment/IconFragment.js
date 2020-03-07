import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Icon, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData } from 'react-uix';
import { Example } from "../component";

const IconFragment = () => {
  return (
    <Fragment title="Icon">
      <Paragraph>
        Icon. Icon names can be found <a href="https://material.io/tools/icons/" target="__blank">here.</a>
      </Paragraph>
      <Example>
        <Icon>home</Icon>
        <Icon>account_circle</Icon>
        <Icon>settings</Icon>
        <Icon>share</Icon>
      </Example>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { Icon } from "react-uix";`} />

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
            <TableData label="Description">The icon name.</TableData>
          </TableRow>
          <TableRow>
            <TableData label="Name">color</TableData>
            <TableData label="Type">string</TableData>
            <TableData label="Required">No</TableData>
            <TableData label="Default" />
            <TableData label="Description">The color of the Icon.</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default IconFragment;
